import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Ingles Principiante",
    Svg: require("@site/static/img/ingles.svg").default,
    description: (
      <>
        Temas : Pronombres , To Be , Partes de la casa , Días de la semana ,
        In/On/At , His/Her , Preguntas , Present Continuo , What y Where , Who /
        Why / Because , a/An , There is / there are , Adjetivos , Verbos ,
        Adverbios , How Many/Much/Aften , Present Simple Y Vocabulario extra.
      </>
    ),
    url: "docs/Principiante",
  },
  {
    title: "Ingles Basico #1",
    Svg: require("@site/static/img/ingles.svg").default,
    description: (
      <>
        Temas : Adverbio de modo , How well , Intensificadores , Pronombre
        objeto , Verbo Let , Adjetivos posesivos , What y Which , One / Ones ,
        Either / Neither , Tecnicas de Enlaces (Fonetica) , Verbos modales (Can
        , Should , Would , Could ) Y Vocabulario extra.
      </>
    ),
    url: "docs/basico-01",
  },
  {
    title: "Ingles Basico #2",
    Svg: require("@site/static/img/ingles.svg").default,
    description: (
      <>
        Temas: Pasado Progresivo o Continuo , Adverbios de pasado y presente ,
        While , For y Ago , How long / How long ago / How much time / Since ,
        Too / so / So much / So many / Too much / Too many , La hora , Como
        Omitir pronombre , Preguntas sujeto y objeto , Pasado simple ( ED , DID
        , Conectores de contraste , Wh question , Adverbios en pasado y presente
        ) , Futuro (Will y Going to , 5 Formas diferente a will y going to ,
        Preposiciones de tiempo in – on - at , Adverbios de futuro ) Y
        Vocabulario extra.
      </>
    ),
    url: "docs/basico-02",
  },
  {
    title: "Ingles Pre-Intermedio",
    Svg: require("@site/static/img/ingles.svg").default,
    description: (
      <>
        Temas: Present perfect , Never Y Ever , Already / Yet / Still ,
        Diferencias entre since y for , "Have Just" y "Just" , Alone / Only /
        Just , Present Perfect vs Past Simple , Uso de "Be able to" en el
        present perfect , Because vs Because Of , Presente Perfecto vs Presente
        Perfecto Continuo , How Long en Presente Perfecto Continuo , WH Question
        en Presente Perfecto Progresivo , There Has Been y There Have Been ,
        Presente Perfecto vs Pasado Perfecto , Need , Pasado Simple y Pasado
        Perfecto , Whatever - Wherever - WhenEver - However - WhichEver -
        WhoEver , Even , Pasado Perfecto progresivo o continuo , It / It´s / Its
        , Futuro perfecto , Futuro perfecto continuo/progresivo , WH Question en
        Futuro perfecto progresivo , Futuro perfecto vs Futuro perfecto
        progresivo Y Tiempos verbales.
      </>
    ),
    url: "docs/pre-intermedio",
  },
  {
    title: "Ingles Intermedio",
    Svg: require("@site/static/img/ingles.svg").default,
    description: (
      <>
        Temas: Profesiones , Because , As , Since y For , Pronombres y Clausulas
        relativas , There used to be , Uso de "There was" y "There were" ,
        "There used to be" vs "There was/were" , "How" , "As" Y "Like" , Another
        , Other , Others , The Other Y Puntos cardinales.
      </>
    ),
    url: "docs/intermedio",
  },
  {
    title: "Extra",
    Svg: require("@site/static/img/ingles.svg").default,
    description: (
      <>
        Temas : ¿Como practicar inglés? , To , Cuando se usa "ING" , Gerundio o
        infinitivo , For , Estructura basica de la oración , Phrasal verbs ,
        Bare infinitive , Or / Nor , Adverbios de frecuencias , Plural , To vs
        For , Adverbios , Evening vs Night , Articulos , Cuantificadores ,
        Pronombres indefinidos , Intensificadores Y Numeros.
      </>
    ),
    url: "docs/Extra",
  },
  {
    title: "Extra #2",
    Svg: require("@site/static/img/ingles.svg").default,
    description: (
      <>
        Temas : Preguntas indirectas , Verbos modales , Preposiciones , Verbo
        Get , Vocabulario , Pronombre reflexivo , Auxiliares , WH question , By
        , Will or going to? , Parallelism , Here Y There , Superlativo , Titulos
        de las personas , Posesivo Sajon , Cuando usar "to do" o "to be" ,
        Diferencias entre "NO" y "NOT" , Usos de “Used to” , Imperativo ,
        Adjetivos comparativos , Delexical verbs , Gonna / Wanna / Gotta E
        Idioms.
      </>
    ),
    url: "docs/Extra02",
  },
  {
    title: "Extra #3",
    Svg: require("@site/static/img/ingles.svg").default,
    description: (
      <>
        Temas : Past Simple vs Past Participle , To have , Condicional , Have
        got , Palabras de contenido y función , Sufijo y Prefijo , To vs With ,
        Condicional Perfecto del pasado , Condicional Perfecto continuo del
        pasado , Condicional Simple del Presente , "So" , Modificadores de
        adjetivos/adverbio , Modificadores de verbos , Too vs So , So vs Such ,
        "Become" , Pronombres posesivos , Tipos de pronombres , Pronombres
        demostrativos , Voz activa y pasiva , Oraciones Concesivas , Clausula
        Adverbial , Say vs Tell , Bored vs Boring Y Verbos Modales Perfectos.
      </>
    ),
    url: "docs/Extra03",
  },
  {
    title: "Extra #4",
    Svg: require("@site/static/img/ingles.svg").default,
    description: (
      <>
        Temas : "So far" , "By far" , "For now" , "By now" y "Until now" ,
        "Ever" , "Than" vs "What" vs "That" , Preposiciones Colgantes ,
        Interrogativos , "Such" , Pronombres recíprocos , Pronombres intensivos
        , Objeto Directo e Indirecto , Conectores , Conectores Y Conjunciones ,
        Story vs History , Adjetivos caracteristicas y Pronunciación.
      </>
    ),
    url: "docs/Extra04",
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
