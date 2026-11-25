"""Coherencia entre data/catalogo.py y data/catalogo.json.

Se ejecuta con `make test-python` o `python -m unittest discover -s tests`.
"""

import json
import pathlib
import re
import unittest

ROOT = pathlib.Path(__file__).resolve().parent.parent
JSON_PATH = ROOT / "data" / "catalogo.json"
PY_PATH = ROOT / "data" / "catalogo.py"


class CatalogoTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
        cls.constants = {}
        for match in re.finditer(r"^([A-Z_]+) = (.+)$", PY_PATH.read_text(encoding="utf-8"), re.MULTILINE):
            name, raw = match.groups()
            try:
                cls.constants[name] = json.loads(raw)
            except json.JSONDecodeError:
                cls.constants[name] = raw.strip('"')

    def test_identidad(self):
        self.assertEqual(self.constants["REPO"], self.data["nombre"])
        self.assertEqual(self.constants["REMOTO"], self.data["remoto"])
        self.assertEqual(self.constants["LICENCIA"], self.data["licencia"])

    def test_metricas(self):
        self.assertEqual(self.constants["PAGINAS"], self.data["paginas_estaticas"])
        self.assertEqual(self.constants["ARCHIVOS"], self.data["medido"]["archivos"])
        self.assertGreater(self.constants["ARCHIVOS"], 0)

    def test_paleta(self):
        self.assertEqual(self.constants["PALETA"], self.data["paleta"])
        for key in ("bg", "ink", "accent"):
            self.assertRegex(self.data["paleta"][key], r"^#[0-9a-f]{6}$")

    def test_idiomas(self):
        self.assertEqual(self.constants["IDIOMAS"], ["es", "ca", "en"])


if __name__ == "__main__":
    unittest.main()
