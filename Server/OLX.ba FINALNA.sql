
CREATE TABLE "Korisnik" (
  "idK" serial PRIMARY KEY,
  "ime" varchar(255),
  "prezime" varchar(255),
  "email" varchar(255),
  "sifra" varchar(255),
  "adresa" varchar(255),
  "broj_telefona" integer,
  "zadnja_prijava" timestamp,
  "slika_link" varchar(255)
);

CREATE TABLE "KategorijaVozilo" (
  "idKV" serial PRIMARY KEY,
  "proizvodjac" varchar(255),
  "model" varchar(255),
  "kilometraza" varchar(255),
  "broj_vrata" varchar(255),
  "godiste" varchar(255),
  "kubikaza" decimal,
  "kilovata" decimal,
  "gorivo" varchar(255),
  "konjskih_snaga" varchar(255),
  "tip" varchar(255),
  "transmisija" varchar(255),
  "registrovan_do" timestamp,
  "velicina_felgi" integer,
  "euro" integer,
  "pogon" varchar(255),
  "mjesta" integer
);

CREATE TABLE "KategorijaOglasi" (
  "idKO" serial PRIMARY KEY,
  "spol" varchar(255)
);

CREATE TABLE "KategorijaNekretnina" (
  "idKN" serial PRIMARY KEY,
  "adresa" varchar(255),
  "vrsta" varchar(255),
  "broj_soba" integer,
  "kvadrata" integer,
  "opremljenost" varchar(255),
  "sprat" integer,
  "grijanje" integer,
  "licenca_agenta" integer,
  "godina_izgradnje" timestamp,
  "orijentacija" varchar(255),
  "pod" varchar(255),
  "broj_kupatila" integer
);

CREATE TABLE "KategorijaTehnika" (
  "idKT" serial PRIMARY KEY,
  "ram" integer,
  "interna" integer,
  "procesor" varchar(255),
  "graficka" varchar(255),
  "OS" varchar(255),
  "proizvodjac" varchar(255),
  "vrsta_graficke" varchar(255),
  "rezolucija" varchar(255),
  "velicina_ekrana" integer,
  "usb_portovi" integer,
  "baterija" varchar(255),
  "garancija" integer,
  "fizicka_jezgra" integer
);

CREATE TABLE "Artikal" (
  "idA" serial PRIMARY KEY,
  "naslov" varchar(255),
  "datum_promjene" timestamp,
  "lokacija" varchar(255),
  "dostupno" bool,
  "stanje" varchar(255),
  "cijena" decimal,
  "proces" varchar(255),
  "opis" text,
  "idK" integer,
  "idKV" integer,
  "idKN" integer,
  "idKO" integer,
  "idKT" integer,
  CONSTRAINT "Artikal_ibfk_1" FOREIGN KEY ("idK") REFERENCES "Korisnik" ("idK"),
  CONSTRAINT "Artikal_ibfk_2" FOREIGN KEY ("idKV") REFERENCES "KategorijaVozilo" ("idKV"),
  CONSTRAINT "Artikal_ibfk_3" FOREIGN KEY ("idKN") REFERENCES "KategorijaNekretnina" ("idKN"),
  CONSTRAINT "Artikal_ibfk_4" FOREIGN KEY ("idKO") REFERENCES "KategorijaOglasi" ("idKO"),
  CONSTRAINT "Artikal_ibfk_5" FOREIGN KEY ("idKT") REFERENCES "KategorijaTehnika" ("idKT")
);

CREATE TABLE "KategorijaCheckBoxDetalj" (
  "idKCB" serial PRIMARY KEY,
  "vrijednost_checkboxa" varchar(255),
  "idA" integer,
  CONSTRAINT "KategorijaCheckBoxDetalj_ibfk_1" FOREIGN KEY ("idA") REFERENCES "Artikal" ("idA")
);

CREATE TABLE "Narudzba" (
  "idN" serial PRIMARY KEY,
  "datum_narudzbe" timestamp,
  "ukupna_cijena" integer,
  "kolicina" integer,
  "adresa" varchar(255),
  "grad" varchar(255),
  "drzava" varchar(255),
  "postanski_broj" integer,
  "idK" integer,
  CONSTRAINT "Narudzba_ibfk_1" FOREIGN KEY ("idK") REFERENCES "Korisnik" ("idK")
);

CREATE TABLE "SpaseniArtikal" (
  "idSO" serial PRIMARY KEY,
  "datum_spasavanja" timestamp,
  "idK" integer,
  "idA" integer,
  CONSTRAINT "SpaseniArtikal_ibfk_1" FOREIGN KEY ("idK") REFERENCES "Korisnik" ("idK"),
  CONSTRAINT "SpaseniArtikal_ibfk_2" FOREIGN KEY ("idA") REFERENCES "Artikal" ("idA")
);

CREATE TABLE "Slika" (
  "idS" serial PRIMARY KEY,
  "slika_link" varchar(255),
  "idA" integer,
  CONSTRAINT "Slika_ibfk_1" FOREIGN KEY ("idA") REFERENCES "Artikal" ("idA")
);

CREATE TABLE "ArtikalNarudzba" (
  "idAN" serial PRIMARY KEY,
  "kolicina" integer,
  "idA" integer,
  "idN" integer,
  CONSTRAINT "ArtikalNarudzba_ibfk_1" FOREIGN KEY ("idA") REFERENCES "Artikal" ("idA"),
  CONSTRAINT "ArtikalNarudzba_ibfk_2" FOREIGN KEY ("idN") REFERENCES "Narudzba" ("idN")
);
