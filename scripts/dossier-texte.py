# -*- coding: utf-8 -*-
"""v89 · LE TEXTE DU DOSSIER SPÉCIMEN, extrait de sa propre couche texte.

Le popup montre les deux pages du dossier en images (v87) : c'est le vrai
document, et c'était l'arbitrage. Mais une image n'est pas du texte, et la
substance du dossier avait donc disparu du HTML, deux commits après la v86
qui ne servait qu'à être indexé.

Ce script lit la COUCHE TEXTE DU PDF LUI-MÊME, jamais une re-saisie : la
transcription ne peut pas diverger du document. Le niveau de chaque bloc est
déduit de la TAILLE DE FONTE mesurée dans le PDF, pas d'une liste de titres
tenue à la main, pour que le jour où le gabarit change la structure suive.

Seuils mesurés sur le spécimen 2026-000 : 54 pt filigrane, 21 pt le nom,
14,5 à 15 pt la thèse et les intertitres, 9,7 pt le corps, 7,4 à 8,4 pt les
notes et les cellules de tableau.

Lancé par scripts/specimen-pages.mjs, ou seul :
  python3 scripts/dossier-texte.py
"""
import pymupdf, re, sys, pathlib

PDF = pathlib.Path("public/specimen-imbrin.pdf")
SORTIE = pathlib.Path("src/config/dossier-texte.ts")

FILIGRANE = 30.0   # au-dessus : le tampon SPÉCIMEN en fond, pas du contenu
TITRE = 13.0       # au-dessus : le nom de la société et la thèse
GRAS = 9.2         # à partir de là, un semi-gras est un intertitre
NOTE = 9.0         # en dessous : notes de bas de bloc et cellules de tableau


COURT = 60         # un intertitre est court ; un paragraphe en gras ne l'est pas


def niveau(taille, gras, texte):
    # LA TAILLE NE SUFFIT PAS, mesuré sur le spécimen : les intertitres du
    # document (« L'angle », « Ce que le registre établit », « Les pièces
    # lues »...) sont en HankenGrotesk-SemiBold à 9,4 pt, c'est-à-dire à la
    # taille du corps. Sans le gras ils se collaient au paragraphe suivant.
    # Le seuil de 9,2 écarte les en-têtes de tableau, semi-gras à 8,2 pt.
    # LE GRAS SEUL NE SUFFIT PAS NON PLUS : le document met aussi en gras le
    # fait daté qui ouvre la page, un paragraphe de trois lignes. Un
    # intertitre est COURT, c'est ce qui les sépare.
    if taille >= TITRE or (gras and taille >= GRAS and len(texte) <= COURT):
        return "titre"
    if taille < NOTE:
        return "note"
    return "texte"


def propre(s):
    # règle de charte v8, sans exception depuis la v78 : aucun tiret cadratin
    # ni demi-cadratin dans les textes du site. Les deux du PDF deviennent des
    # virgules ; aucun fait n'est modifié. Écart signalé dans CLAUDE.md.
    s = s.replace(" — ", ", ").replace("—", ",").replace(" – ", ", ").replace("–", ",")
    return re.sub(r"\s+", " ", s).strip()


def blocs_de(page):
    out = []
    for b in page.get_text("dict")["blocks"]:
        premier = len(out)  # on ne recolle jamais par-dessus une frontière de bloc
        for ligne in b.get("lines", []):
            spans = [s for s in ligne["spans"] if s["text"].strip()]
            if not spans:
                continue
            taille = max(s["size"] for s in spans)
            if taille >= FILIGRANE:
                continue
            gras = any("Bold" in s["font"] for s in spans)
            texte = propre("".join(s["text"] for s in spans))
            if not texte:
                continue
            n = niveau(taille, gras, texte)
            # une ligne de corps qui suit une phrase non terminée la continue :
            # le PDF coupe ses paragraphes ligne à ligne. Jamais sur un titre,
            # jamais d'un bloc visuel à l'autre.
            # le recollage vaut AUSSI pour les titres : la thèse du document
            # tient sur deux lignes, elle ne doit pas sortir en deux blocs.
            recolle = (
                len(out) > premier
                and out[-1]["n"] == n
                and not re.search(r"[.:;!?»)]$", out[-1]["t"])
            )
            if recolle:
                out[-1]["t"] += " " + texte
            else:
                out.append({"n": n, "t": texte})
    return out


def main():
    if not PDF.exists():
        sys.exit(f"PDF absent : {PDF}")
    doc = pymupdf.open(PDF)
    pages = [blocs_de(p) for p in doc]
    lignes = [
        "/* v89 · LE TEXTE DU DOSSIER SPÉCIMEN. GÉNÉRÉ, NE PAS ÉDITER À LA MAIN :",
        "   extrait de la couche texte de public/specimen-imbrin.pdf par",
        "   scripts/dossier-texte.py, relancé par « npm run specimen-pages ».",
        "   Le popup montre les pages en images (v87, le vrai document) ; cette",
        "   transcription est l'ALTERNATIVE TEXTE qui les accompagne : elle rend",
        "   au HTML la substance que les images lui avaient retirée, et elle est",
        "   le seul moyen de lire le dossier sur un téléphone, où la page A4",
        "   s'affiche à 0,44 fois sa taille. Le niveau de chaque bloc vient de la",
        "   taille de fonte mesurée dans le PDF, pas d'une liste tenue à la main.",
        "   La transcription passe par typoDeep, comme copy.ts et analyses.ts :",
        "   sans lui elle serait le seul texte du site sans espaces insécables.",
        "   Le PDF n'en porte aucune, vérifié. */",
        "import { typoDeep } from \"./typo\";",
        "",
        "export type BlocDossier = { n: \"titre\" | \"texte\" | \"note\"; t: string };",
        "",
        "export const dossierTexte: BlocDossier[][] = typoDeep([",
    ]
    for page in pages:
        lignes.append("  [")
        for b in page:
            t = b["t"].replace("\\", "\\\\").replace('"', '\\"')
            lignes.append(f'    {{ n: "{b["n"]}", t: "{t}" }},')
        lignes.append("  ],")
    lignes.append("]);")
    SORTIE.write_text("\n".join(lignes) + "\n", encoding="utf-8")
    print(f"{SORTIE} : {len(pages)} pages, {sum(len(p) for p in pages)} blocs")


main()
