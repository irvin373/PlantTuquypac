export const dropTables = [`DROP TABLE IF EXISTS MedicalGroup;`,
`DROP TABLE IF EXISTS Recipe;`,
`DROP TABLE IF EXISTS Plant_to_Recipe;`,
`DROP TABLE IF EXISTS Plant;`];

export const createTables = [`CREATE TABLE IF NOT EXISTS MedicalGroup (
	id	INTEGER NOT NULL UNIQUE,
	name	TEXT NOT NULL UNIQUE,
	PRIMARY KEY(id AUTOINCREMENT)
);`,
`CREATE TABLE IF NOT EXISTS Recipe (
	id	INTEGER NOT NULL UNIQUE,
	name	TEXT NOT NULL,
	imageName	TEXT,
	preparation	TEXT NOT NULL,
	PRIMARY KEY(id AUTOINCREMENT)
);`,
`CREATE TABLE IF NOT EXISTS Plant_to_Recipe (
	id	INTEGER NOT NULL UNIQUE,
	plantId	INTEGER NOT NULL,
	recipeId	INTEGER NOT NULL,
	FOREIGN KEY(plantId) REFERENCES Plant(id),
	FOREIGN KEY(recipeId) REFERENCES Recipe(id),
	PRIMARY KEY(id AUTOINCREMENT)
);`,
`CREATE TABLE IF NOT EXISTS Plant (
	id	INTEGER NOT NULL UNIQUE,
	name	TEXT NOT NULL UNIQUE,
	description	TEXT NOT NULL,
	MedicalGroupId	INTEGER,
	imageName	TEXT,
	FOREIGN KEY(MedicalGroupId) REFERENCES MedicalGroup(id),
	PRIMARY KEY(id AUTOINCREMENT)
);`]

export const inserts = [`INSERT INTO "MedicalGroup" ("id","name")
VALUES (1,'Aparato respiratorio'), (2,'digestion'), (3,'limpiza de sangre'), (4,'elevan defensas');`,
`INSERT INTO "Plant" ("id","name","description","MedicalGroupId","imageName")
VALUES (1,'La Muña Andina','**PROPIEDADES**
- mejora la digestión
- alivia cólicos menstruales y mareos
- para el Asma
- problemas de tos
- diarreas
- carminativa
- antiséptica y cicatrizante
- antiparasitario
- Broncodilatador
- en halitosis mejora la visión

**PARTES QUE SE USAN:** Flores, hojas, tallos',2,'munaandina.jpg'),
(2,'Toronjil','**PROPIEDADES**
- acción sedante
- Insomnio
- anti estrés
- cardiopatias de tipo nervioso
- Carminativa
- resfriados y gripe
- herpes labial (herpes simplex Antiemético
- Antiséptica
- Digestiva
- Espasmos uterinos

**PARTES QUE SE USAN:** Flores, hojas, tallos',1,'toronjil.jpg'),
(3,'Lluvia de oro','**PROPIEDADES**
- Protector hepático
- purifica la sangre, baja la fiebre o calentura, así como en la fiebre amarilla,
- para tratar enfermedades como el ácido úrico, reuma y problemas de cálculos en la vesícula biliar
- digestivo en dolor de estómago, estimulante del apetito,
- laxante, disentería, gastritis, empacho, anorexia, pirosis (acidez estomacal), atonía intestinal.
- problemas del hígado.
- para el dolor de muelas.
- hipocolesterolémica, hipoglicémica,
- sudorífica, tónico, vermífuga.

**PARTES QUE SE USAN:** Flores, hojas, frutos, cortezas',3,'lluviadeoro.jpg'),
(4,'Wira wira','**PROPIEDADES**
- Inmunoestimulante
- Antioxidante
- protector celular
- Desinflamante
- tratamiento de la tos y gripe
- infecciones bacterianas, virales, fúngicas
- alivia dolores de cabeza, calambres y problemas de estómago.
- febrífugo, antihelmintico
- digestiva, carminativa, antiespasmódica
- colagoga, eupéptica y emenagoga.
- reducir colesterol.

**PARTES QUE SE USAN:** Flores, hojas, tallos',4,'wirawira.jpg'),
(5,'Manzanilla','**PROPIEDADES**
- mejora la digestión,
- favorece la expulsión de gases intestinales,
- alivia dolores estomacales,
- evita náuseas y vómitos
- cólicos, gastritis, úlceras gástricas
- antiinflamatorio.
- sedantes en estrés
- cefalea, neuralgias y migraña.
- reduce cólicos menstruales

**PARTES QUE SE USAN:** Flores, hojas, tallos',4,'manzanilla.jpg'),
(6,'hierba buena','**PROPIEDADES**
- En indigestión.
- distensión abdominal y flatulencia
- elimina la halitosis
- Alivia las hemorroides
- propiedades anticoagulantes
- es afrodisíaca
- reduce los niveles de estrés
- problemas respiratorios
- migraña o jaqueca
- infecciones vaginales: vulvovaginitis, vulvitis, vaginitis o flujo vaginal (candidiasis)

**PARTES QUE SE USAN:** Flores, hojas, tallos',4,'hierbabuena.jpg'),
(7,'planta de palta','**PROPIEDADES**
- Antioxidante
- Inmunoestimulante
- nutritivo
- laxante y diurético suave astringente, antidiarreica
- fortalece y aumenta las defensas
- en inapetencia
- prevenir infecciones de la vejiga
- mareo y jaqueca
- prevención de resfriados y gripes
- antiescorbútico
- el aceite mejora la piel

**PARTES QUE SE USAN:** hojas, corteza, pulpa de la fruta, semilla.',4,'palta.jpg'),
(8,'lavanda','**PROPIEDADES**
- Analgésico
- Sedante
- Antiséptico
- antioxidante
- Antiinflamatorio
- Anti estrés
- Relajante

**PARTES QUE SE USAN:** flor, hojas',4,'lavanda.jpg'),
(9,'mandarina','**PROPIEDADES**
- Anti estrés
- afecciones del sistema circulatorio y de hipertensión Asma, actúa como broncodilatador
- indicada para casos de ansiedad, taquicardia, depresión,
- aceites esenciales procedentes de la cascara de la mandarina y naranjo amargo
- en aromaterapia para problemas de insomnio
- nervios y sudoración.

**PARTES QUE SE USAN:** jugo, pulpa, cascara, flores, hojas, semillas',4,'mandarina.jpg'),
(10,'diente de leon','**PROPIEDADES**
- Protector hepático
- Depurativo de la sangre
- Mantiene correcto funcionamiento del hígado
- Digestiva
- Combate el acné y el eczema
- Mejora la salud de los ojos
- Ayuda a bajar de peso
- Propiedad diurética
- Sustituto del café

**PARTES QUE SE USAN:** Flores, hojas, raíz.',4,'dienteleon.jpg'),
(11,'ortiga','**PROPIEDADES**
- Protector hepático, inmunomodulador
- hipoglucemiante,
- Digestiva
- Bajar nivel del ácido úrico,
- Antihistamínico, en alergias
- tratamiento de la próstata
- Alzheimer, artritis, asma, infecciones de vejiga, bronquitis, bursitis, gingivitis, gota, urticaria, cálculos renales, laringitis,
- esclerosis múltiple, síndrome premenstrual
- rinitis alérgica
- Hipertension
- tratar o prevenir la calvicie
- Hemorragias
- Galactogoga,

**PARTES QUE SE USAN:** Flores, hojas, tallos, raíz',4,'ortiga.jpg'),
(12,'Jengibre','**PROPIEDADES**
- Antioxidante
- Inmunoestimulante
- desinflamante
- dispepsia, digestiones lentas, gastritis crónica o inapetencia
- Carminativa
- cirrosis, ictericia, enfermedades hepáticas o trastornos en la vesícula biliar
- artritis reumatoide
- depresión (emocional o estacional)
- enfermedades cardiovasculares

**PARTES QUE SE USAN:** raíz',4,'jengibre.jpeg');`,
`INSERT INTO "Recipe" ("id","name", "imageName", "preparation")
VALUES (1, 'Anti-inflamatorio', 'antiinflamatorio.jpg', '### Anti-inflamatorio

Una inflamación es la respuesta automática del cuerpo ante un estímulo potencialmente dañino. Aunque por lo general, se percibe como algo desagradable, esta reacción protege al cuerpo de daños peores.

Las inflamaciones se pueden dividir en 2 tipos: internas y externas.

Las inflamaciones internas no son fáciles de percibir pero con ayuda del laboratorio u otra forma de diagnóstico se puede ubicar y asegurar el danio.

**Uso Interno**
La inflamación externa en el cuerpo siempre presenta cuatro síntomas típicos: Enrojecimiento, Hinchazón, Sensibilidad al dolor, Calor

Para un litro de agua hervida agregar:
- 2 cucharadas de manzanilla (flores)
- 1 cuchara de palta (pepa rallada o en polvo)
- 1/2 cucharada de cáscara de mandarina
- Dejar reposar 5 minutos

Colar y tomar tibio 3 tazas por día, durante 14 días, después de hacer pausa de 1 semana para continuar si es necesario, hasta lograr mejoría.

Estas mismas plantas se pueden hervir para aplicar en zonas inflamadas en forma de fomentos. 
otras opciones: curcuma, tajibo, jamillo, muérdago, laurel, arnica.'),
(2, 'Antioxidante', 'antioxidante.jpg', '### Antioxidante
Los Antioxidantes precienen el desgaste y evegecimiento celular excesivo ante situaciones de alta demanda energetica como stress, enfermedades crónicas, grandes esfuerzos fisicos, mentales o simplemente el paso del tiempo.

**CUÁLES SON Y DÓNDE ESTÁN:**

**Vitamina C:** Todas las frutas y verduras especialmente cítricos, kiwi, frutillas, tomates, brócoli, camu camu.

**Vitamina A:** Huevos, zanahorias, espinaca, coliflor, repollo.

**Betacaroteno:** Zanahorias, espinaca, coliflor, repollo.

**Vitamina E:** todos los aceites que usamos en la alimentación, germen de trigo, palta, aceite de olivo, maní, almendra.

**Zinc:** Carne vacuna, mariscos, nueces, quesos.

**Selenio:** Frutas y verduras, legumbres, cereales integrales, lácteos.

**Cobre:** Hígado, mariscos, nueces, zanahorias.

**USO INTERNO**

Para 1 litro de agua hervida agregar: 
- 1 cuchara de diente de león (raíz)
- 2 cucharas de Wira wira (flores)
- 1 y 1/2 cuchara de jengibre ( raíz fresca o seca )
- Dejar reposar 5 minutos

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de 1 semana y luego continuar con el tratamiento.
Otras opciones: flor de Jamaica, carambola, agracejo, limón, acerola, kiwi, caju, copoasu, puca puca, sacha tomate, kita tomate.'),
(3, 'Ateroesclerosis', 'Ateroesclerosis.jpg', '### Ateroesclerosis

La arteriosclerosis es, fundamentalmente, el endurecimiento de las arterias y de los vasos sanguíneos. Esta es una condición en la que se presentan algunos procesos degenerativos dentro de los cuales existe un alto riesgo de sufrir graves accidentes cardiovasculares, por lo que resulta muy importante estar pendientes de mantener los niveles de colesterol y de presión arterial muy controlados.

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 1 cuchara de muña andina(hojas)
- 1 cuchara de carqueja(hojas - opcional)
- 1 cuchara de jengibre(raíz fresca o seca)
- 1 cuchara de ortiga(hojas)
- Dejar reposar 5 minutos

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de 1 semana y luego continuar con el tratamiento.

Otras opciones: milenrama, árnica, bolsa de pastor, consuelda mayor, cola de caballo, pelo de choclo.'),
(4, 'Artritis', 'artritis.jpg', '### Artritis

La artritis es una enfermedad que ocasiona una inflamación en la zona donde se unen los huesos, es decir, en las articulaciones. Este problema de salud causa muchos dolores a quienes lo sufren y condiciona en gran medida su calidad de vida.
Las siguientes plantas, gracias a sus propiedades curativas reducen inflamación y el dolor que causa la artritis.

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 1 cucharada de pepa palta (rallada o en polvo)
- 2 cucharas de manzanilla (flores)
- 1 cucharada de jengibre (raíz fresca o seca)
- 1 cucharada de ortiga (hojas)
- Dejar reposar 5 minutos

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de 1 semana y luego continuar con el tratamiento. Otras opciones: uña de gato, cúrcuma, caléndula.

**Recomendación:** Ejercicio físico adaptado a nuestra situación, Alimentación equilibrada y alcalinizante. 
Aplicación de frío o calor, de barro o de cataplasmas antiinflamatorios. Masajes y otras terapias manuales con caite o pomadas de pepas de palta'),
(5, 'Cirrosis', 'cirrosis.jpg', '### Cirrosis hepática

La cirrosis hepática es una enfermedad crónica, que se desarrolla lentamente en el hígado.

Ésta se caracterizada por la proliferación exagerada y continua de pequeñas cicatrices en el interior del hígado que impide el normal funcionamiento de este órgano (depurar la sangre, elaborar proteínas y vitaminas, formar elementos defensivos) y produce una alteración de la circulación sanguínea a través de este.
La cirrosis hepática es más frecuente entre los varones mayores de 50 años aunque los primeros síntomas suelen aparecer a partir de los 30.
Por lo general, es causado por el consumo prolongado de elevadas cantidades de bebidas alcohólicas, por Infecciones anteriores (hepatitis) y algunas intoxicaciones con sustancias químicas industriales (fósforo) y medicamentos.

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 1 cuchara de lluvia de oro(hojas, flores)
- 1 cuchara de manzanilla (flores)
- 1 y 1/2 cuchara de diente de león (raiz)
- 1 cuchara de ortiga (hojas)
- Dejar reposar 3 minutos

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de 1 semana y luego continuar con el tratamiento. Otras opciones: uña de gato, jayaj pichana, tecoma, fresno.'),
(6, 'Cistitis', 'cistitis.jpg', '### Cistitis

Infección de orina o del tracto urinario son expresiones que engloban diferentes enfermedades infecciosas (producidas por un microorganismo o germen) y que afectan a cualquier parte del sistema urinario (riñón, uréteres, vejiga urinaria o uretra). Es recomendable evitar las bebidas del café, té, las bebidas alcohólicas y refrescos. En la alimentación se sugiere preferir las leches de origen vegetal, tales como la leche de soja, alpiste, almendras o ajonjoli en lugar de la leche de vaca.

**USO INTERNO**

Para 1 litro de agua hervida agregar:

- 1 cuchara de pepa de palta rallada o en polvo
- 1 cuchara de manzanilla (flores)
- 1 cuchara de jengibre (raíz fresca o seca)
- 1 cuchara de ortiga (hojas) Dejar reposar 5 minutos.

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de 1 semana y luego continuar con el tratamiento.

**Otras opciones**: perejil, saraphuni, arándanos, llanten, limón.
**Recomendación:** Consumir alimentos integrales como los cereales o granos completos como el trigo, arroz integral, comer más verduras y frutas, eliminar las grasas y los dulces para protegerse de las bacterias (principalmente escherichia coli). Estas dietas evitarán la acumulación de toxinas en la orina, mejorando así el estado del aparato urinario.'),
(7, 'Colesterol', 'colesterol.jpg', '### Colesterol elevado

El exceso de grasas de densidad baja(LDL) en la sangre, provocan problemas cardiovasculares, por tanto, hay que elevar el colesterol HDL (consultar). Las siguientes plantas medicinales favorecen la eliminación de grasas y lípidos, ayudándonos a mantener el correcto metabolismo de nuest organismo. Estas reducen el colesterol "malo" y también los triglicéridos.

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 1 cuchara de lluvia de oro(hojas, flores)
- 1 cuchara de toronjil(hojas)
- 1 cuchara de diente de leon (raiz)
- 1 cuchara de cáscara de mandarina
- Dejar reposar 5 minutos

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de 1 semana y luego continuar con el tratamiento.

**Otras opciones:** diente de león, te de alpiste, té verde, ajos, cola de caballo, pelo de choclo(maíz)

No consumir grasas saturadas, como por ejemplo: las frituras.'),
(8, 'Diabetes', 'diabetes.jpg', '### Diabetes

Es una enfermedad crónica, pero con el consumo de plantas medicinales se puede atenuar y controlar ayudando a mantener estable el organismo respecto de los niveles de la glucosa.

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 1 cuchara de toronjil(hojas)
- 1 cuchara de lluvia de oro (hojas, flores)
- 1/2 cuchara de diente de león (raiz)
- 1/2 cuchara de cascara de mandarina
- 1 cuchara de jengibre (raíz fresca o seca)
- Dejar reposar 5 minutos

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de 1 semana y luego continuar con el tratamiento.

**Otras opciones:** eucalipto, té verde, tarwi, fresno, tecoma, uri uri.

**Recomendación:** evitar exceso de consumo de carbohidratos y azúcares.'),
(9, 'Gastritis', 'gastritis.jpg', '### Gastritis

Se dice que es una de las enfermedades más frecuentes en la sociedad del siglo XXI y está relacionada con el estrés, los malos hábitos alimentarios (alimentos chatarra) y la falta de ejercicio.

¿Cuáles son las causas de la gastritis?

- Productos lácteos (sobre todo, enteros)
- Alimentación alta en grasas
- Alimentos bajos en fibras
- Cafeína
- Bacteria Helicobacter Pylori
- Ciertos medicamentos (como la aspirina o los antiinflamatorios)
- Alcohol
- Tabaco
- Sensibilidad a ciertos alimentos
- Alimentos picantes
- Comidas muy condimentadas
- Anemia perniciosa (cuando no se absorbe bien la vitamina B12)
- Reflujo gástrico

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 3 cucharas de manzanilla (flores)
- 1 cuchara de muña andina (hojas)
- Dejar reposar 5 minutos

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de 1 semana y luego continuar con el tratamiento.

**Otras opciones:** aloe vera, llanten, boldo, salvia, romero, malva, flor de Jamaica (hibisco), avena, maicena, chayote, siempreviva (hojas), phasa.

**Recomendación:** no consumir productos lácteos, no alimentos picantes e irritantes, no gaseosas, no frituras, no frutas acidas, no fibras insolubles.

Realiza 5 comidas diarias(poco a la vez): desayuno, merienda, almuerzo, merienda, y cena. Mastica bien los alimentos y come despacio. Evitar actividades estresantes.'),
(10, 'Fiebre', 'fiebre.jpg', '### Fiebre
Una de las recomendaciones generales cuando la persona tiene fiebre es tomar líquidos. Se debe tomar agua, jugos y caldos para mantener el cuerpo hidratado. Los mates también son buenos para bajar la calentura.

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 1 cuchara de cascara de mandarina.
- 1 cuchara de Wira wira (flores)
- 1/2 cuchara de jengibre (raíz fresca o seca)
- Dejar reposar 5 minutos

Colar y tomar tibio 3 tazas por día por 7 días, después solo esperar que el cuerpo se regenere.

**Otras opciones:** te de laurel, te de sauco, te de albahaca.

**Recomendación:** Cuidar la dieta como en todos los casos.'),
(11, 'Hipertensión', 'hipertension.jpg', '### Hipertensión arterial
La presión arterial alta es uno de los problemas de salud que más afecta a las personas en el mundo. siendo causante de muchas enfermedades cardiovasculares que en casos graves pueden llevar incluso a la muerte. Entre los factores más comunes de la H.A. podemos encontrar: el tabaquismo, el consumo de alcohol, comer alimentos ricos en grasas, la falta de actividades fisicas, la genética y el envejecimiento.
Cuando una persona descuida su problema de presión arterial alta, se empiezan a dañar sus vasos sanguineos y gravitan en torno a las condiciones que amenazan la vida, tales como problemas del corazón, derrame cerebral y paro cardiaco. Es por esta razón que es muy importante actuar a tiempo y tomar las medidas preventivas para que la enfermedad no avance.

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 1 cuchara de lavanda (flores)
- 1 cuchara de Wira wira (flores)
- 2 cucharas de ortiga (hojas)
- 1 cuchara de jengibre (raíz fresca o seca)
- Dejar reposar 5 minutos

Colar y tomar tiblo 3 tazas por día por 30 días, después hacer pausa de 1 semana y luego continuar con el tratamiento.

**Otras opciones:** maracuyá (flores, frutos), lavanda, albahaca morada, valeriana, diente de león, orégano, cola de caballo.

**Recomendación:** Debemos consultar a un especialista antes de usar algunas plantas ya que son diluyentes de la sangre y promueven la buena circulación, lo que cuida la salud del corazón, baja los niveles de presión sanguinea alta y reduce el colesterol, pero no son compatibles con medicamentos anticoagulantes o antiagregantes. Ejemplo la albahaca morada.'),
(12, 'Menopausia', 'menopausia.jpg', '### Menopausia

La menopausia es aquella etapa de la mujer que se caracteriza por la ausencia definitiva de la menstruación y una serie de cambios hormonales que conducen a transformaciones fisicas y psicológicas.

No suele darse de forma brusca, ya que casi siempre se deja ver a través de indicios que señalan que se dejará de ovular: periodos irregulares, mayor sensación de fatiga y variaciones poco comunes en los estados emocionales.

Tras llegar de forma definitiva a este nuevo ciclo todas empiezan a experimentar una serie de cambios que no son del todo agradables y que, de hecho, requieren de mucha atención.

Los populares sofocos, la sequedad vaginal y el incremento del riesgo de padecer algunas enfermedades son solo algunos de los sintomas que suponen un giro total en el estilo de vida.

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 2 cucharas de toronjil (hojas) .
- 1 cuchara de lavanda (flores)
- 1 cuchara de jengibre (raíz fresca o seca)
- Dejar reposar 3 minutos

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de 1 semana y luego continuar con el tratamiento.

**Otras opciones:** hipérico, tilo, te de jazmín, salvia, maracuyá, valeriana, brotes de alfa alfa, cardamomo, sacha salvia, pampa salvia, sij sij, maca.'),
(13, 'Obesidad', 'obesidad.jpg', '### Obesidad

Los crecientes índices de obesidad alrededor del mundo, provocados principalmente por los excesos en la ingesta y la vida sedentaria, constituyen uno de los grandes problemas en la salud de las personas que la padecen, como dentro del entorno familiar y nuestras sociedades.

Para hacer un tratamiento integral hay que elegir plantas con las siguientes propiedades:

**Saciantes:** como el GUAR, semillas de llanten (plantago), que al entrar en contacto con el agua forman un gel no digerible que produce sensación de llenura y reduce el apetito. Conviene administrarlas antes de las comidas, acompañadas con suficiente agua.

**Depurativas:** como el pelo de choclo, apio que mejoran la digestión o aumentan la diuresis.

**Con efecto termogénico:** El té verde, la carqueja poseen propiedades termogénicas (acción de generar temperatura, produciendo una acción quema grasa de las células adiposas).

**Inhibidoras de la acumulación de grasa:** Evitan que la glucosa se convierta en grasa. Una de las más estudiadas es la Garcinia cambogia,

**Para reducir la hinchazón del vientre:** Plantas como el hinojo y el toronjil son recomendables para contrarrestar la hinchazón. Contra la retención de liquidos. Mejoran la eliminación de líquidos.
Entre ella figuran: la uva roja, arándano, rusco.

**Para controlar la ansiedad:** como la sacha sunca, valeriana, poseen un efecto tranquilizante.

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 1 cuchara de toronjil (hojas)
- 1 cuchara de wira wira (flores)
- 1 cuchara de ortiga (hojas)
- 1 1/2 cuchara de lluvia de oro (hojas, flores)
- Dejar reposar 5 minutos

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de 1 semana y luego continuar con el tratamiento.

**Otras opciones:** apio, manzana verde, achojcha, guar, garcinia, semilla de uva, lacayote, chayote, repollo.'),
(14, 'Inflamación de Próstata', 'postata.jpg', '### Inflamación de Próstata

La prostatitis es una infección puede ser aguda o crónica, siendo sus síntomas más comunes la necesidad constante de orina, el escozor y dificultad al orinar, eyaculación dolorosa e incluso escalofríos. Entre las causas más habituales de la prostatitis aguda se encuentran el contagio sexual o al realizar una exploración médica. En la prostatitis crónica las causas pueden ser otras infecciones en el aparato urinario o incluso una prostatitis aguda mal curada. Hay hábitos que favorecen la aparición y desarrollo de la prostatitis, como dietas ricas en grasas, no beber suficiente agua, el consumo de lácteos y derivados, el alcohol, productos ricos en azúcares o el estreñimiento.

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 1 cuchara de pepa de palta rallada o en polvo
- 1 cuchara de cascara de mandarina
- 1 cuchara de ortiga (hojas)
- 1 cuchara de jengibre (raíz fresca o seca)
- Dejar reposar 5 minutos

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de semana y luego continuar con el tratamiento.

**Otras opciones:** sabal, uña de gato, semillas de zapallo, tomate, granada, germinados de alfa alfa, apio, higos, espárragos, berenjena, borraja, melocotones, almendras, camotes anaranjados, papayas, caju, almendras, sésamo, col, coles de Bruselas, brócoli.

**Recomendación:** La alimentación es una parte muy importante en la prevención y cuidado de la prostatitis, siendo los alimentos ricos en Zinc y en Vitamina E, muy recomendables debido a sus propiedades antiinflamatorias y antitumorales.'),
(15, 'Reumatismo', 'reumatismo.jpg', '### Reumatismo

El término reumatismo viene de la palabra griega " reuma", que significa hinchazón.

Ésta es una enfermedad aguda o crónica caracterizada por dolor y congestión de las articulaciones o en las partes musculares y fibrosas del cuerpo.

Entre sus principales causas están la predisposición genética y, además, el medio ambiente juega un papel importante como son las infecciones y el trauma.

**USO INTERNO**

Para 1 litro de agua hervida agregar:
- 1 cuchara de pepa de palta rallada o en polvo
- 1 cuchara de manzanilla (flores)
- 1 cuchara de jengibre (raíz fresca o seca)
- 1 cuchara de toronjil (hojas)
- Dejar reposar 5 minutos

Colar y tomar tibio 3 tazas por día por 30 días, después hacer pausa de 1 semana evaluar y luego continuar con el tratamiento. Otras opciones: uña de gato, cúrcuma, calendula, árnica, cebolla, ajo, aceituna negra, salvia, hojas de nogal, eucalipto, ortiga, romero, floripondio en fomentos y cataplasma.')
;`,
`INSERT INTO "Plant_to_Recipe" ("id", "plantId", "recipeId")
VALUES (1, 5, 1), (2, 7, 1), (3, 9, 1), (4, 10, 2), (5, 4, 2), (6, 12, 2), (7, 1, 3), (8, 12, 3), (9, 11, 3),
(10, 7, 4), (11, 5, 4), (12, 11, 4), (13, 3, 5), (14, 5, 5), (15, 11, 5), (16, 10, 5), (17, 7, 6), (18, 5, 6), 
(19, 12, 6), (20, 11, 6), (21, 3, 7), (22, 2, 7), (23, 10, 7), (24, 9, 7), (25, 2, 8), (26, 3, 8), (27, 10, 8), 
(28, 9, 8), (29, 12, 8), (30, 1, 9), (31, 5, 9), (32, 9, 10), (33, 4, 10), (34, 12, 10), (35, 12, 4), (36, 8, 11),
(37, 4, 11), (38, 11, 11), (39, 12, 11), (40, 2, 12), (41, 8, 12), (42, 12, 12), (43, 2, 13), (44, 4, 13),
(45, 11, 13), (46, 3, 13), (47, 11, 14), (48, 7, 14), (49, 9, 14), (50, 12, 14), (51, 7, 15), (52, 5, 15),
(53, 12, 15), (54, 2, 15)`]

// const mapedLabels = {
//   'dienteleon': 10,
//   'hierbabuena': 6, // no coincidencias
//   'lluviaoro': 3,
//   'mandarina': 9,
//   'manzanilla': 5,
//   'munaandina': 1,
//   'ortiga': 11,
//   'palta': 7,
//   'lavanda': 8, // no coincidencias en lugar sacha sunka
//   'toronjil': 2,
//   'wirawira': 4,
//   'jengibre': 12,
// };
