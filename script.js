const NUMERO_WHATSAPP = "5493886441487";
let categoriaActiva = "Todos";
let carrito = [];

const productos = [
  { id: 201, categoria: "Maquillaje", titulo: "SOMBRA MATTE", precioNum: 6000, precioStr: "$6.000", descripcion: "Paleta de sombras matte de alta pigmentación y larga duración para un acabado impecable.", detalles: "✨ Tonos versátiles y fáciles de difuminar para cualquier look de día o de noche.", badge: "agotado", foto: "https://i.ibb.co/7JwBBR3t/SOMBRA-MATTE-6000.jpg" },
  { id: 202, categoria: "Maquillaje", titulo: "SOMBRA ICONIC", precioNum: 3000, precioStr: "$3.000", descripcion: "Sombras icónicas con excelente fijación y colores deslumbrantes.", detalles: "✨ Textura suave que realza tu mirada con gran intensidad.", badge: "Nuevo", foto: "https://i.ibb.co/1JjmjNMH/SOMBRA-ICONIC-3000.jpg" },
  { id: 203, categoria: "Maquillaje", titulo: "SOMBRA COQUETTE", precioNum: 3500, precioStr: "$3.500", descripcion: "Sombras en tonos encantadores para lograr un estilo romántico y sofisticado.", detalles: "✨ Fácil aplicación y gran durabilidad en tus párpados.", badge: "Nuevo", foto: "https://i.ibb.co/RX0BVWQ/SOMBRA-COQUETTE-3500.jpg" },
  { id: 204, categoria: "Maquillaje", titulo: "SOMBRA PINK 21", precioNum: 4000, precioStr: "$4.000", descripcion: "Paleta de sombras Pink 21 con combinación de colores vibrantes y modernos.", detalles: "✨ Alta definición y textura sedosa.", badge: "agotado", foto: "https://i.ibb.co/LzJQMNmr/SOMBRA-PINK21-4000.jpg" },
  { id: 205, categoria: "Maquillaje", titulo: "SOMBRA SANIYE", precioNum: 6500, precioStr: "$6.500", descripcion: "Paleta de sombras Saniye con gran variedad de tonos pigmentados.", detalles: "✨ Diseñada para crear maquillajes profesionales y duraderos.", badge: "Nuevo", foto: "https://i.ibb.co/YBkLgKJj/SOMBRA-SANIYE-6500.jpg" },
  { id: 206, categoria: "Maquillaje", titulo: "SOMBRA MUFFIN", precioNum: 5500, precioStr: "$5.500", descripcion: "Sombras con acabado suave y delicado para destacar tus ojos.", detalles: "✨ Pigmentos de alta calidad que cuidan tu piel.", badge: "Nuevo", foto: "https://i.ibb.co/d084Mpkj/SOMBRA-MUFFIN-5500.jpg" },
  { id: 207, categoria: "Maquillaje", titulo: "CORRECTOR PINK 21", precioNum: 2500, precioStr: "$2.500", descripcion: "Corrector Pink 21 para ocultar ojeras e imperfecciones con gran naturalidad.", detalles: "✨ Cobertura uniforme y textura ligera.", badge: "Nuevo", foto: "https://i.ibb.co/d0yH3QBN/CORRECTOR-PINK21-2500.jpg" },
  { id: 208, categoria: "Maquillaje", titulo: "CORRECTOR 4 ANGEL", precioNum: 3000, precioStr: "$3.000", descripcion: "Corrector 4 Angel de alta cobertura y larga duración.", detalles: "✨ Ideal para perfilar y corregir imperfecciones con precisión.", badge: "Nuevo", foto: "https://i.ibb.co/G3GbXtfw/CORRECTOR-4-ANGEL-3000.jpg" },
  { id: 209, categoria: "Maquillaje", titulo: "ILUMINADOR", precioNum: 2500, precioStr: "$2.500", descripcion: "Iluminador en polvo para aportar un brillo radiante y destellos de luz a tu rostro.", detalles: "✨ Realza tus pómulos y puntos clave de la cara al instante.", badge: "Nuevo", foto: "https://i.ibb.co/vxs9pWYj/ILUMINADOR-2500.jpg" },
  { id: 210, categoria: "Maquillaje", titulo: "LABIAL TEI", precioNum: 2000, precioStr: "$2.000", descripcion: "Labial Tei con color intenso y gran confort para tus labios.", detalles: "💋 Alta fijación y textura suave que no reseca.", badge: "Nuevo", foto: "https://i.ibb.co/gL5GHryf/LABIAL-TEI-2000.jpg" },
  { id: 211, categoria: "Accesorios", titulo: "PORTA COSMETICO", precioNum: 5000, precioStr: "$5.000", descripcion: "Práctico porta cosmético para llevar todo tu maquillaje ordenado y seguro.", detalles: "✨ Material resistente y amplio espacio interior.", badge: "Agotado", foto: "https://i.ibb.co/jvtqSRw8/PORTA-COSMETICO-5000.jpg" },
  { id: 212, categoria: "Accesorios", titulo: "SET PARA PEINADO", precioNum: 1000, precioStr: "$1.000", descripcion: "Set esencial para peinar y estilizar tu cabello fácilmente.", detalles: "✨ Ideal para llevar en la cartera y hacer retoques rápidos.", badge: "Nuevo", foto: "https://i.ibb.co/Psk46yQW/SET-PARA-PEINADO-1000.jpg" },
  { id: 213, categoria: "Maquillaje", titulo: "PALETA ARTISTICA", precioNum: 4500, precioStr: "$4.500", descripcion: "Paleta artística con gran variedad de colores para looks creativos y audaces.", detalles: "✨ Pigmentos intensos y de fácil combinación.", badge: "Agotado", foto: "https://i.ibb.co/1fQGjqSb/PALETA-ARTISTICA-4500.jpg" },
  { id: 214, categoria: "Maquillaje", titulo: "MAQUILLAJE ARTISTICO", precioNum: 4500, precioStr: "$4.500", descripcion: "Maquillaje artístico versátil para diseños creativos y originales.", detalles: "✨ Textura suave y segura para la piel.", badge: "Agotado", foto: "https://i.ibb.co/dwzd34Kw/MAQUILLAJE-ARTISTICO-4500.jpg" },
  { id: 215, categoria: "Bienestar", titulo: "PERFUME KUROMI", precioNum: 3000, precioStr: "$3.000", descripcion: "Fragancia adorable y duradera en formato compacto ideal para regalar o llevar con vos.", details: "🌸 Aroma tierno y fresco que perdura por horas.", badge: "Nuevo", foto: "https://i.ibb.co/6cDKwSzQ/PERFUME-KUROMI-3000.jpg" },
  { id: 216, categoria: "Cuidado Facial", titulo: "MASCARA REFRESCANTE PARA ROSTRO", precioNum: 7000, precioStr: "$7.000", descripcion: "Máscara refrescante para descongestionar, relajar y revitalizar la piel del rostro.", detalles: "✨ Alivio inmediato y sensación de frescura profunda.", badge: "Nuevo", foto: "https://i.ibb.co/JRDj0JYn/MASCARA-REFRESCANTE-PARA-ROSTRO-7000.jpg" },
  { id: 217, categoria: "Cuidado Facial", titulo: "MASCARILLA FACIAL", precioNum: 1000, precioStr: "$1.000", descripcion: "Mascarilla facial nutritiva para limpiar impurezas y devolverle la luminosidad a tu piel.", details: "🌿 Ideal para un momento de relax en tu rutina de skincare.", badge: "Nuevo", foto: "https://i.ibb.co/G4wq0fyP/MASCARILLA-FACIAL-1000.jpg" },
  { id: 101, categoria: "Accesorios", titulo: "Billetera", precioNum: 6500, precioStr: "$6.500", descripcion: "Billetera compacta y funcional, ideal para llevar tus tarjetas y efectivo organizados con estilo.", detalles: "✨ Excelente diseño y materiales resistentes para el uso diario.\n\n👜 Tamaño cómodo para llevar en cualquier cartera o bolso.", badge: "Nuevo", foto: "https://i.ibb.co/273G0YvW/BILLETERA-6500.jpg" },
  { id: 102, categoria: "Accesorios", titulo: "Billetera", precioNum: 6500, precioStr: "$6.500", descripcion: "Billetera práctica con múltiples compartimentos para mantener todo en orden.", detalles: "✨ Terminaciones cuidadas y diseño versátil que combina con todo.", badge: "Nuevo", foto: "https://i.ibb.co/Z1KrFGFC/BILLETERA2-6500.jpg" },
  { id: 103, categoria: "Maquillaje", titulo: "Brillo Labial", precioNum: 1500, precioStr: "$1.500", descripcion: "Brillo labial que aporta un acabado luminoso, hidratación y volumen natural a tus labios.", details: "💋 Textura ligera y confortable sin sensación pegajosa.\n\n✨ Brillo de larga duración ideal para cualquier ocasión.", badge: "Nuevo", foto: "https://i.ibb.co/VY7hNQzN/BRILLO-LABIAL-1500.jpg" },
  { id: 104, categoria: "Accesorios", titulo: "Cartera", precioNum: 16500, precioStr: "$16.500", descripcion: "Cartera espaciosa y elegante, perfecta para acompañar tus salidas y rutina diaria.", details: "✨ Confección resistente con amplio espacio interior y detalles sofisticados.", badge: "Nuevo", foto: "https://i.ibb.co/dJcpCDY8/CARTERA-16500.jpg" },
  { id: 105, categoria: "Accesorios", titulo: "Cartera", precioNum: 16500, precioStr: "$16.500", descripcion: "Cartera urbana de diseño moderno para llevar todo lo que necesitas con comodidad.", details: "✨ Práctica, segura y con gran capacidad para el día a día.", badge: "Nuevo", foto: "https://i.ibb.co/pr16y81Z/CARTERA2-16500.jpg" },
  { id: 106, categoria: "Maquillaje", titulo: "Corrector", precioNum: 2000, precioStr: "$2.000", descripcion: "Corrector de alta cobertura para disimular ojeras e imperfecciones con acabado natural.", details: "✨ Fórmula de fácil difuminado que unifica el tono de la piel sin marcar líneas.", badge: "Nuevo", foto: "https://i.ibb.co/1Jmk8PS6/CORRECTOR-2000.jpg" },
  { id: 107, categoria: "Maquillaje", titulo: "Corrector", precioNum: 2000, precioStr: "$2.000", descripcion: "Corrector líquido de larga duración para un rostro fresco y sin imperfecciones.", details: "✨ Textura ligera que se funde perfectamente con tu piel.", badge: "Nuevo", foto: "https://i.ibb.co/3Y4RQVD5/CORRECTOR2-2000.jpg" },
  { id: 108, categoria: "Accesorios", titulo: "Juego de Brochas Chicas", precioNum: 4500, precioStr: "$4.500", descripcion: "Set de brochas de tamaño compacto, esenciales para retoques precisos y maquillaje de ojos.", details: "✨ Cerdas ultrasuaves de alta calidad para un difuminado perfecto y prolijo.", badge: "Nuevo", foto: "https://i.ibb.co/Mk7nCWwV/JUEGO-DE-BROCHAS-CHICAS-4500.jpg" },
  { id: 109, categoria: "Accesorios", titulo: "Juego de Brochas Grandes", precioNum: 10000, precioStr: "$10.000", descripcion: "Set completo de brochas profesionales para rostro, bases y polvos con acabado impecable.", details: "✨ Cerdas densas y suaves diseñadas para una aplicación uniforme y profesional.", badge: "Nuevo", foto: "https://i.ibb.co/93yxPMZH/JUEGO-DE-BROCHAS-GRANDES-10000.jpg" },
  { id: 110, categoria: "Maquillaje", titulo: "Gloss Tei", precioNum: 2500, precioStr: "$2.500", descripcion: "Gloss labial de tendencia que aporta un brillo deslumbrante y nutrición instantánea.", details: "💋 Labios con efecto jugoso y voluminoso durante todo el día.", badge: "Nuevo", foto: "https://i.ibb.co/Df5SLzPR/GLOSS-TEI-2500.jpg" },
  { id: 111, categoria: "Bienestar", titulo: "Perfume Hello Kitty", precioNum: 3000, precioStr: "$3.000", descripcion: "Fragancia dulce y encantadora en práctico formato compacto para llevar a todos lados.", details: "🌸 Aroma fresco y juvenil que perdura suavemente en tu piel.", badge: "Nuevo", foto: "https://i.ibb.co/zVxG88sR/PERFUME-HELLO-KITTY-3000.jpg" },
  { id: 71, categoria: "Bienestar", titulo: "Combo Día de la Madre", precioNum: 10000, precioStr: "$10.000", descripcion: "Especial Día de la Madre: Set completo de belleza y cuidado personal.", details: "💖 Incluye:\n• Delineador de ojos\n• Delineador de labios\n• Lip gloss Mely\n• Esponja difuminadora\n• Arqueador de pestañas\n• Mini espejo p/ cartera\n• Brocha difuminadora\n• Broche hawaiano\n• Lima de uñas\n• Mascarilla facial", badge: "Nuevo", foto: "https://i.ibb.co/Jw8yfHcn/COMBO-3.jpg" },
  { id: 72, categoria: "Bienestar", titulo: "Combo Día de la Madre", precioNum: 6000, precioStr: "$6.000", descripcion: "Especial Día de la Madre: Set compacto de belleza y accesorios.", details: "💖 Incluye:\n• Anotador\n• Lip gloss\n• Set fashion x5", badge: "Nuevo", foto: "https://i.ibb.co/dwKbbYMj/COMBO-4.jpg" },
  { id: 70, categoria: "Pestañas & Mirada", titulo: "Gel de Cejas", precioNum: 2500, precioStr: "$2.500", descripcion: "Gel fijador transparente para peinar, definir y mantener tus cejas intactas todo el día.", details: "✨ Fórmula de fijación ligera y sin sensación pegajosa ni residuos blancos.\n\n👁️ Cepillo de alta precisión para peinar y dar forma pelo a pelo fácilmente.", badge: "Nuevo", foto: "https://i.ibb.co/pv43Bcrg/GEL-DE-CEJAS.jpg" },
  { id: 67, categoria: "Cuidado Facial", titulo: "Pañuelo Facial", precioNum: 1500, precioStr: "$1.500", descripcion: "Pañuelo facial delicado y suave, ideal para la limpieza y cuidado diario de tu rostro.", details: "✨ Textura ultra suave ideal para retirar restos de maquillaje o secar el rostro sin irritar.\n\n🌸 Cuida la piel de tu rostro dejándola fresca y limpia.", badge: "Nuevo", foto: "https://i.ibb.co/GfFt9110/Whats-App-Image-2026-09-15-at-14-18-21-2.jpg" },
  { id: 68, categoria: "Accesorios", titulo: "Toalla para Cabello", precioNum: 5000, precioStr: "$5.000", descripcion: "Toalla absorbente de microfibra diseñada para secar tu cabello de forma rápida y sin frizz.", details: "💇‍♀️ Reduce el encrespamiento y protege la fibra capilar durante el secado.\n\n✨ Diseño cómodo y ligero que se ajustifica perfectamente a la cabeza.", badge: "Nuevo", foto: "https://i.ibb.co/mVQLL6Q0/TOALLA-PARA-CABELLO.jpg" },
  { id: 69, categoria: "Accesorios", titulo: "Brocha para Rubor", precioNum: 3000, precioStr: "$3.000", descripcion: "Brocha angulada con cerdas suaves para una aplicación precisa y natural del rubor.", details: "✨ Permite difuminar e iluminar los pómulos resaltar los rasgos de tu rostro.\n\n💖 Cerdas delicadas de alta calidad para un acabado impecable.", badge: "Agotado", foto: "https://i.ibb.co/tP1wBWVQ/Whats-App-Image-2026-09-15-at-14-04-18-2.jpg" },
  { id: 63, categoria: "Accesorios", titulo: "Brochas x2", precioNum: 2000, precioStr: "$2.000", descripcion: "Dúo práctico de brochas esenciales para retoques rápidos e impecables.", details: "✨ Cerdas ultra suaves ideales para aplicar sombras o polvos en cualquier momento.\n\n💖 Tamaño compacto perfecto para llevar en el cosmetiquero.", badge: "Nuevo", foto: "https://i.ibb.co/zV4bhFy0/BROCHAS-X2.jpg" },
  { id: 64, categoria: "Accesorios", titulo: "Brochas x4", precioNum: 3000, precioStr: "$3.000", descripcion: "Set de 4 brochas versátiles para lograr un acabado uniforme en tu rutina de maquillaje.", details: "✨ Incluye brochas indispensables para difuminar y aplicar productos líquidos y en polvo.\n\n🌸 Cerdas delicadas que cuidan tu piel.", badge: "Nuevo", foto: "https://i.ibb.co/xSSFG4nn/BROCHAS-X4.jpg" },
  { id: 65, categoria: "Accesorios", titulo: "Brochas x3", precioNum: 3000, precioStr: "$3.000", descripcion: "Trio de brochas multifunción para definir, difuminar e iluminar tu rostro.", details: "✨ Diseñadas para una distribución precisa del producto sin desperdiciar nada.\n\n💖 Mango ergonómico de fácil manejo.", badge: "Agotado", foto: "https://i.ibb.co/zVRVfYDh/BROCHAS-X3.jpg" },
  { id: 66, categoria: "Accesorios", titulo: "Peine", precioNum: 4000, precioStr: "$4.000", descripcion: "Peine de diseño ergonómico ideal para desenredar y estilizar tu cabello con suavidad.", details: "💇‍♀️ Desliza fácilmente sin estirar ni dañar la fibra capilar.\n\n✨ Apto para todo tipo de cabello, húmedo o seco.", badge: "Nuevo", foto: "https://i.ibb.co/LD4Wcst3/PEINE.jpg" },
  { id: 60, categoria: "Accesorios", titulo: "Strass Gemas Autoadhesivas", precioNum: 1000, precioStr: "$1.000", descripcion: "Gemas brillantes autoadhesivas para crear looks de maquillaje únicos y deslumbrantes.", details: "✨ Fáciles de aplicar en rostro, ojos o cuerpo.\n\n💖 Adhesivo seguro y suave con la piel.", badge: "Nuevo", foto: "https://i.ibb.co/PkNgckf/Whats-App-Image-2026-09-15-at-14-18-24.jpg" },
  { id: 50, categoria: "Maquillaje", titulo: "Labial Líquido Matte", precioNum: 2500, precioStr: "$2.500", descripcion: "Color mate intocable y de alta fijación que no transfiere.", details: "💋 Pigmento concentrado de secado rápido con acabado mate uniforme.\n\n✨ Sensación ligera que permanece intacta durante horas.", badge: "Nuevo", foto: "https://i.ibb.co/CpKYk8nq/Whats-App-Image-2026-09-15-at-14-18-25-1.jpg" },
  { id: 49, categoria: "Maquillaje", titulo: "Esponja Difuminadora x12", precioNum: 7000, precioStr: "$7.000", descripcion: "Set x12 esponjas supersuaves para una aplicación impecable del maquillaje.", details: "✨ Set de esponjas ergonómicas para aplicar bases y correctores sin rayas.\n\n💧 Aumentan su tamaño al humedecerse para dejar un acabado natural.", badge: "Nuevo", foto: "https://i.ibb.co/9HBZCH6h/Whats-App-Image-2026-09-15-at-14-18-25.jpg" },
  { id: 51, categoria: "Cuidado Facial", titulo: "Perfiladores", precioNum: 1000, precioStr: "$1.000", descripcion: "Perfiladores faciales para remover el vello fino y exfoliar suavemente.", details: "✨ Hojas de máxima precisión para delinear cejas y retirar el vello facial.\n\n🌿 Facilita una mejor absorción de tus productos de piel.", badge: "Nuevo", foto: "https://i.ibb.co/hRK2sdQf/Whats-App-Image-2026-09-15-at-14-30-10-1.jpg" },
  { id: 52, categoria: "Maquillaje", titulo: "Sombra 4 Angels", precioNum: 3500, precioStr: "$3.500", descripcion: "Cuarteto de sombras celestiales con combinación de tonos deslumbrantes.", details: "✨ 4 tonos perfectamente coordinados para lograr looks de día o de noche.\n\n🌸 Textura suave al tacto y de fácil difuminado.", badge: "Agotado", foto: "https://i.ibb.co/CpV97Q7T/Whats-App-Image-2026-09-15-at-14-30-11-1.jpg" },
  { id: 53, categoria: "Uñas", titulo: "Esmalte Fortalecedor para Uñas", precioNum: 2500, precioStr: "$2.500", descripcion: "Esmalte de color vibrante, alto brillo y cobertura uniforme.", details: "💅 Pincel plano de alta precisión para una aplicación rápida y prolija.\n\n✨ Secado rápido y acabado duradero.", badge: "Agotado", foto: "https://i.ibb.co/fz2PtrZb/Whats-App-Image-2026-09-15-at-14-30-13-1.jpg" },
  { id: 61, categoria: "Maquillaje", titulo: "Primer Facial", precioNum: 1500, precioStr: "$1.500", descripcion: "Prepara e hidrata la piel para minimizar poros y alargar la duración del maquillaje.", details: "✨ Textura ligera de rápida absorción.\n\n🌿 Deja una textura sedosa antes del maquillaje.", badge: "Nuevo", foto: "https://i.ibb.co/m5dC4Z3n/Whats-App-Image-2026-09-15-at-14-30-14-1.jpg" },
  { id: 55, categoria: "Accesorios", titulo: "Pinza de Depilar", precioNum: 500, precioStr: "$500", descripcion: "Pinza de punta de precisión para retirar hasta el vello más rebelde.", details: "✨ Fabricada en acero inoxidable con agarre firme y sin esfuerzo.\n\n👁️ Indispensable para dar forma perfecta a tus cejas.", badge: "Nuevo", foto: "https://i.ibb.co/3mw4MBCL/Whats-App-Image-2026-09-15-at-14-30-14-2.jpg" },
  { id: 54, categoria: "Maquillaje", titulo: "Labial Mely", precioNum: 2500, precioStr: "$2.500", descripcion: "Tono vibrante y fórmula enriquecida para cuidar e hidratar tus labios.", details: "💋 Alta cobertura en una sola pasada con acabado sedoso.\n\n✨ Mantiene los labios humectados e iluminados.", badge: "Nuevo", foto: "https://i.ibb.co/JW4K4GjB/Whats-App-Image-2026-09-15-at-14-30-14.jpg" },
  { id: 37, categoria: "Accesorios", titulo: "Brocha x4", precioNum: 3500, precioStr: "$3.500", descripcion: "Set esencial de brochas suaves para una aplicación impecable de maquillaje.", details: "✨ Set completo de 4 brochas de cerdas ultra suaves para ojos, rostro y difuminado.\n\n💖 Tamaño práctico e ideal para llevar en tu cosmetiquera.", badge: "Nuevo", foto: "https://i.ibb.co/Nhd25HT/Whats-App-Image-2026-09-15-at-14-30-15-1.jpg" },
  { id: 42, categoria: "Uñas", titulo: "Uñas Esculpidas", precioNum: 3500, precioStr: "$3.500", descripcion: "Set de uñas para una manicura rápida, elegante y duradera en minutos.", details: "💅 Uñas de acabado profesional listas para aplicar sin salir de casa.\n\n✨ Material resistente con acabado brillante.", badge: "Nuevo", foto: "https://i.ibb.co/HfJqNZBb/Whats-App-Image-2026-09-15-at-14-30-15.jpg" },
  { id: 36, categoria: "Accesorios", titulo: "Broche Hawaiiana", precioNum: 2000, precioStr: "$2.000", descripcion: "Accesorios para el cabello con diseño floral veraniego para un look fresco.", details: "🌸 Broche estilo flor hawaiana ideal para sostener tu cabello con elegancia.", badge: "Nuevo", foto: "https://i.ibb.co/mr0b8WgJ/Whats-App-Image-2026-09-15-at-13-46-27-1.jpg" },
  { id: 38, categoria: "Cuidado Facial", titulo: "Manteca de Cacao", precioNum: 1500, precioStr: "$1.500", descripcion: "Hidratación profunda para tus labios, manteniéndolos suaves y protegidos.", details: "💋 Bálsamo highly nutritivo que repara la resequedad.", badge: "Nuevo", foto: "https://i.ibb.co/mVnpsNFy/Whats-App-Image-2026-09-15-at-13-46-31.jpg" },
  { id: 39, categoria: "Maquillaje", titulo: "Sombra Pink", precioNum: 4500, precioStr: "$4.500", descripcion: "Paleta de sombras en tonos rosados de alta pigmentación y acabado sedoso.", details: "🌸 Tonos rosados que van desde acabados mate hasta destellos luminosos.", badge: "Agotado", foto: "https://i.ibb.co/602D42JM/Whats-App-Image-2026-09-15-at-13-46-32-1.jpg" },
  { id: 40, categoria: "Maquillaje", titulo: "Pincel de Silicona", precioNum: 1500, precioStr: "$1.500", descripcion: "Aplicador higiénico y suave para mascarillas, labiales y glitters.", details: "✨ Cabezal de silicona de fácil limpieza que no absorbe ni desperdicia producto.", badge: "Nuevo", foto: "https://i.ibb.co/prRDhtZ9/Whats-App-Image-2026-09-15-at-14-18-19-1.jpg" },
  { id: 41, categoria: "Cuidado Facial", titulo: "Espuma Mely", precioNum: 7000, precioStr: "$7.000", descripcion: "Limpiador facial en espuma para retirar impurezas y calmar la piel.", details: "🫧 Espuma suave que limpia los poros a fondo sin resecar la piel.", badge: "Nuevo", foto: "https://i.ibb.co/xqpSyQqh/Whats-App-Image-2026-09-15-at-14-18-19-2.jpg" },
  { id: 43, categoria: "Pestañas & Mirada", titulo: "Rímel 4D", precioNum: 3500, precioStr: "$3.500", descripcion: "Máscara de pestañas para un volumen dramático y alargamiento extremo.", details: "👁️ Efecto de volumen 4D con fibras que alargan cada pestaña individualmente.", badge: "Nuevo", foto: "https://i.ibb.co/v6S0bj25/Whats-App-Image-2026-09-15-at-14-18-21-1.jpg" },
  { id: 44, categoria: "Maquillaje", titulo: "Labial Velvet", precioNum: 2000, precioStr: "$2.000", descripcion: "Acabado aterciopelado con sensación ligera y confortable en tus labios.", details: "💋 Textura cremosa de acabado mate aterciopelado.", badge: "Nuevo", foto: "https://i.ibb.co/VYTsF7Pp/Whats-App-Image-2026-09-15-at-14-18-22.jpg" },
  { id: 45, categoria: "Accesorios", titulo: "Mini Espejito", precioNum: 1000, precioStr: "$1.000", descripcion: "Espejo ultracompacto para retoques rápidos en cualquier lugar.", details: "👜 Tamaño ultra pequeño e ideal para llevar en cualquier bolsillo.", badge: "Nuevo", foto: "https://i.ibb.co/W47Fsgmk/Whats-App-Image-2026-09-15-at-14-18-22-1.jpg" },
  { id: 46, categoria: "Accesorios", titulo: "Cepillo con Espejo", precioNum: 2000, precioStr: "$2.000", descripcion: "Cepillo de pelo plegable con espejo integrado para peinarte al instante.", details: "🌸 Práctico formato 2 en 1 ideal para la cartera o tu bolso de viaje.", badge: "Nuevo", foto: "https://i.ibb.co/Txmtr33r/Whats-App-Image-2026-09-15-at-14-18-22-2.jpg" },
  { id: 47, categoria: "Pestañas & Mirada", titulo: "Rímel Sky High", precioNum: 3000, precioStr: "$3.000", descripcion: "Longitud sin límites e impacto desde cualquier ángulo para tus pestañas.", details: "👁 Cepillo flexible que alcanza hasta la pestaña más pequeña.", badge: "Nuevo", foto: "https://i.ibb.co/bZxBX0Q/Whats-App-Image-2026-09-15-at-14-18-24-1.jpg" },
  { id: 48, categoria: "Bienestar", titulo: "Perfume en Tubo", precioNum: 3500, precioStr: "$3.000", descripcion: "Fragancia concentrada en formato compacto para retoques aromáticos.", details: "🌸 Fragancia intensa y elegante lista para aplicar de forma rápida.", badge: "Nuevo", foto: "https://i.ibb.co/4ZLhtFBW/Whats-App-Image-2026-09-15-at-14-18-24-2.jpg" },
  { id: 56, categoria: "Maquillaje", titulo: "Delineador Líquido", precioNum: 2000, precioStr: "$2.000", descripcion: "Delineador de precisión con punta pincel para trazos finos e intensos.", details: "👁️ Pigmentación ultra negra de secado rápido que no se cuartea.", badge: "Nuevo", foto: "https://i.ibb.co/7Jx34MYg/Whats-App-Image-2026-09-15-at-14-04-13.jpg" },
  { id: 57, categoria: "Accesorios", titulo: "Cera para el Cabello", precioNum: 3000, precioStr: "$3.000", descripcion: "Cera fijadora para peinados y control de cabellos rebeldes.", details: "💇‍♀️ Modela y da textura a tu cabello sin dejar residuos grasos.", badge: "Nuevo", foto: "https://i.ibb.co/t7XQLkH/Whats-App-Image-2026-09-15-at-14-04-14.jpg" },
  { id: 58, categoria: "Uñas", titulo: "Quita Esmalte", precioNum: 2000, precioStr: "$2.000", descripcion: "Removedor suave de esmalte sin resecar las cutículas.", details: "💅 Remueve el esmalte de forma rápida mientras cuida y protege la uña.", badge: "Nuevo", foto: "https://i.ibb.co/Ym1vNwb/Whats-App-Image-2026-09-15-at-14-04-16-2.jpg" },
  { id: 59, categoria: "Maquillaje", titulo: "Polvo de Hadas", precioNum: 2500, precioStr: "$2.500", descripcion: "Iluminador en polvo suelto con aplique de esponja para un destello mágico e intenso.", details: "✨ Aporta un brillo deslumbrante en rostro, ojos, escote y cuerpo.", badge: "Agotado", foto: "https://i.ibb.co/sdfj3p1M/Whats-App-Image-2026-09-15-at-14-04-21.jpg" },
  { id: 35, categoria: "Bienestar", titulo: "Mini Perfumero", precioNum: 1500, precioStr: "$1.500", descripcion: "Recargable y compacto, ideal para llevar tu fragancia favorita a todos lados.", details: "✨ Perfumero recargable portátil de fácil llenado.", badge: "Nuevo", foto: "https://i.ibb.co/qtVgD2G/PERFUMITOS.jpg" },
  { id: 31, categoria: "Cuidado Facial", titulo: "Mascarilla para Nariz (A)", precioNum: 500, precioStr: "$500", descripcion: "Elimina puntos negros y limpia profundamente los poros de la zona T.", details: "✨ Tira limpiadora especializada para remover impurezas y dejar la piel de la nariz suave y purificada.\n\n🌿 Ideal para complementar tu rutina de skincare semanal.", badge: "Agotado", foto: "https://i.ibb.co/9HGS2DF2/MASCARA-PARA-NARIZ.jpg" },
  { id: 32, categoria: "Cuidado Facial", titulo: "Mascarilla para Nariz (B)", precioNum: 500, precioStr: "$500", descripcion: "Elimina puntos negros y limpia profundamente los poros de la zona T.", details: "✨ Tira limpiadora especializada para remover impurezas y dejar la piel de la nariz suave y purificada.\n\n🌿 Ideal para complementar tu rutina de skincare semanal.", badge: "Nuevo", foto: "https://i.ibb.co/ZpycqTjj/MASCARA-PARA-NARIZ-2.jpg" },
  { id: 29, categoria: "Cuidado Facial", titulo: "Toallita Desmaquillante (A)", precioNum: 1500, precioStr: "$1.500", descripcion: "Remueve el maquillaje de forma suave y eficiente.", details: "✨ Textura extrasuave y reutilizable, gentil con la piel.", badge: "Agotado", foto: "https://i.ibb.co/mCWnxQsV/TOALLITA-DESMAQUILLANTE-2.jpg" },
  { id: 30, categoria: "Cuidado Facial", titulo: "Toallita Desmaquillante (B)", precioNum: 1500, precioStr: "$1.500", descripcion: "Remueve el maquillaje de forma suave y eficiente.", details: "✨ Textura extrasuave y reutilizable, gentil con la piel.", badge: "Agotado", foto: "https://i.ibb.co/21sChY9L/TOALLITA-DESMAQUILLANTE-3.jpg" },
  { id: 28, categoria: "Maquillaje", titulo: "Delineador", precioNum: 1500, precioStr: "$1.500", descripcion: "Logra un trazo preciso y definido para una mirada inolvidable.", details: "✨ Delineador de alta pigmentación con punta de alta precisión para un acabado profesional.\n\n👁️ De secado rápido y larga duración.", badge: "Nuevo", foto: "https://i.ibb.co/ks4Hsds5/DELINEADOR-2.jpg" },
  { id: 25, categoria: "Cuidado Facial", titulo: "Mascarilla Facial (Variante 1)", precioNum: 1000, precioStr: "$1.000", descripcion: "Revitaliza tu piel con un boost de hidratación profunda y nutrición.", details: "✨ Mascarilla diseñada para limpiar impurezas, calmar la piel y devolverle su brillo natural.\n\n🌿 Ideal para un momento de relax en tu rutina.", badge: "Nuevo", foto: "https://i.ibb.co/bg0HNrnS/MASCARILLA-FACIAL-2.jpg" },
  { id: 26, categoria: "Cuidado Facial", titulo: "Mascarilla Facial (Variante 2)", precioNum: 1000, precioStr: "$1.000", descripcion: "Revitaliza tu piel con un boost de hidratación profunda y nutrición.", details: "✨ Mascarilla diseñada para limpiar impurezas, calmar la piel y devolverle su brillo natural.\n\n🌿 Ideal para un momento de relax en tu rutina.", badge: "Nuevo", foto: "https://i.ibb.co/mCN8vbZ7/MASCARILLA-FACIAL-3.jpg" },
  { id: 27, categoria: "Cuidado Facial", titulo: "Mascarilla Facial (Variante 3)", precioNum: 1000, precioStr: "$1.000", descripcion: "Revitaliza tu piel con un boost de hidratación profunda y nutrición.", details: "✨ Mascarilla diseñada para limpiar impurezas, calmar la piel y devolverle su brillo natural.\n\n🌿 Ideal para un momento de relax en tu rutina.", badge: "Nuevo", foto: "https://i.ibb.co/KjN54yb7/MASCARILLA-FACIAL.jpg" },
  { id: 24, categoria: "Accesorios", titulo: "Espejo Compacto", precioNum: 2000, precioStr: "$2.000", descripcion: "Espejo compacto y práctico, ideal para llevar en la cartera o perfeccionar tu rutina de maquillaje diaria.", details: "✨ Diseño elegante y cómodo para asegurar una visión clara en cualquier momento y lugar.\n\nGB Un accesorio indispensable que no te puede faltar.", badge: "Nuevo", foto: "https://i.ibb.co/LhXf1HcG/ESPEJO.jpg" },
  { id: 23, categoria: "Cuidado Facial", titulo: "Masajeador Jade", precioNum: 7000, precioStr: "$7.000", descripcion: "Rodillo de jade natural para masajes faciales, estimulando la circulación y reduciendo la hinchazón.", details: "✨ Ayuda a mejorar la elasticidad de la piel, facilita la absorción de sérums y cremas, y aporta una agradable sensación refrescante.\n\n🌿 Ideal para sumar a tu rutina de skincare diaria.", badge: "Nuevo", foto: "https://i.ibb.co/3mFk1ZzW/MASAGEADOR-JADE.png" },
  { id: 22, categoria: "Maquillaje", titulo: "Labial Humectante", precioNum: 2000, precioStr: "$2.000", descripcion: "Color intenso y larga duración para unos labios seductores todo el día.", details: "✨ Fórmula de alta pigmentación que aporta suavidad e hidratación sin resecar.\n\n💄 Acabado impecable y textura ligera de gran confort.", badge: "Nuevo", foto: "https://i.ibb.co/TDMTfjmt/LABIAL.png" },
  { id: 21, categoria: "Maquillaje", titulo: "Esponja Difuminadora Soft", precioNum: 3500, precioStr: "$3.500", descripcion: "Logra un acabado uniforme, suave y sin marcas en tu base y correctores.", details: "✨ Textura supersuave que se expande al humedecerse, ideal para aplicar productos líquidos y en crema sin absorber de más.\n\n💧 Te ayuda a difuminar a la perfección para un look profesional.", badge: "Nuevo", foto: "https://i.ibb.co/9H2cSDyK/ESPONJA-DIFUMINADORA.png" },
  { id: 33, categoria: "Maquillaje", titulo: "Esponja Difuminadora Pro", precioNum: 3500, precioStr: "$3.500", descripcion: "Logra un acabado uniforme, suave y sin marcas en tu base y correctores.", details: "✨ Textura supersuave que se expande al humedecerse, ideal para aplicar productos líquidos y en crema sin absorber de más.\n\n💧 Te ayuda a difuminar a la perfección para un look profesional.", badge: "Agotado", foto: "https://i.ibb.co/93B9Rd7y/ESPONJA-DIFUMINADORA-2.jpg" },
  { id: 17, categoria: "Cuidado Facial", titulo: "Depiladora Facial Portátil", precioNum: 10000, precioStr: "$10.000", descripcion: "Elimina el vello facial de forma suave, rápida y sin irritaciones.", details: "✨ Práctica y portátil, ideal para dejar la piel lista para el maquillaje.", badge: "Nuevo", foto: "https://i.ibb.co/v6Xrwhx3/DEPILADORA-FACIAL.jpg" },
  { id: 18, categoria: "Cuidado Facial", titulo: "Esponja de Silicona", precioNum: 3000, precioStr: "$3.000", descripcion: "Limpieza profunda y exfoliación suave para una piel radiante.", details: "✨ Cerdas de silicona ultra suaves que remueven impurezas sin irritar.", foto: "https://i.ibb.co/BHgMt7QK/ESPONJA-DE-SILICONA.jpg" },
  { id: 19, categoria: "Cuidado Facial", titulo: "Toallita Desmaquillante Clásica", precioNum: 1500, precioStr: "$1.500", descripcion: "Remueve el maquillaje de forma suave y eficiente.", details: "✨ Textura extrasuave y reutilizable, gentil con la piel.", badge: "Agotado", foto: "https://i.ibb.co/YTX7ZMYc/TOALLITA-DESMAQUILLANTE.jpg" },
  { id: 10, categoria: "Pestañas & Mirada", titulo: "Arqueador de Pestañas", precioNum: 2000, precioStr: "$2.000", descripcion: "Curvatura perfecta y duradera para realzar tus pestañas en segundos.", details: "✨ Diseñado ergonómicamente para curvar tus pestañas de forma natural y segura.", foto: "https://i.ibb.co/QFJRY33s/ARQUEADOR-DE-PESTA-AS.jpg" },
  { id: 20, categoria: "Cuidado Facial", titulo: "Depiladora de Cristal", precioNum: 5000, precioStr: "$5.000", descripcion: "Exfoliación y depilación suave sin dolor para una piel ultrasuave.", details: "✨ Innovadora tecnología de nanocristales que elimina el vello y exfolia suavemente células muertas.\n\n🌿 Reutilizable y libre de irritaciones.", badge: "Nuevo", foto: "https://i.ibb.co/WW6nWWqH/DEPILADORA-DE-CRISTAL.jpg" },
  { id: 1, categoria: "Maquillaje", titulo: "Delineador Clásico", precioNum: 1500, precioStr: "$1.500", descripcion: "Logra un trazo preciso y definido para una mirada inolvidable.", details: "✨ Delineador de alta pigmentación con punta de alta precisión para un acabado profesional.\n\n👁️ De secado rápido y larga duración.", foto: "https://i.ibb.co/3ywf3gxt/DELINEADOR.jpg" },
  { id: 3, categoria: "Maquillaje", titulo: "Delineador de Labios", precioNum: 1500, precioStr: "$1.500", descripcion: "Define y dale volumen a tus labios con una precisión impecable.", details: "✨ Delineador de textura suave y cremosa que permite trazos definidos y uniformes.", foto: "https://i.ibb.co/5ytbGLz/DELINEADOR-DE-LABIOS.jpg" },
  { id: 4, categoria: "Bienestar", titulo: "Aromatizador de Ambiente", precioNum: 3500, precioStr: "$3.500", descripcion: "Transforma tu espacio en un refugio de calma con fragancias envolventes.", details: "✨ Aromatizador de ambiente diseñado para neutralizar olores y perfumar suavemente cada rincón.", foto: "https://i.ibb.co/Cp85PGYG/AROMATIZADOR.jpg" },
  { id: 5, categoria: "Maquillaje", titulo: "Rubor en Barra", precioNum: 3500, precioStr: "$3.500", descripcion: "Un toque de color natural y saludable para resaltar tus mejillas al instante.", details: "✨ Textura cremosa y de fácil aplicación que se funde con tu piel para un acabado fresco.", foto: "https://i.ibb.co/ymhyvCDb/RUBOR-EN-BARRA.jpg" },
  { id: 6, categoria: "Cuidado Facial", titulo: "Mascara de Gel Facial", precioNum: 8000, precioStr: "$8.000", descripcion: "Ideal para descongestionar, relajar e hidratar la piel del rostro.", details: "✨ Ayuda a reducir la inflamación y atenuar ojeras con alivio refrescante inmediato.", badge: "Agotado", foto: "https://i.ibb.co/Zp5HhG1y/MASCARA-DE-GEL-FACIAL.jpg" },
  { id: 7, categoria: "Pestañas & Mirada", titulo: "Pestañas Pelo por Pelo", precioNum: 8500, precioStr: "$8.500", descripcion: "Mirada impactante y natural. Resalta tus ojos con volumen impecable.", details: "✨ Logra una mirada sofisticada, intensa y súper natural sin necesidad de maquillaje diario.", foto: "https://i.ibb.co/PZm6nTVr/PESTA-AS-PELO-POR-PELO.jpg" },
  { id: 8, categoria: "Pestañas & Mirada", titulo: "Pestañas 3D", precioNum: 3000, precioStr: "$3.000", descripcion: "Aporta mayor profundidad, textura y un volumen deslumbrante a tu mirada.", details: "✨ Diseño tridimensional que aporta capas de densidad equilibrada para un efecto liviano.", foto: "https://i.ibb.co/ccKQ6RTG/PESTA-AS-3-D.jpg" },
  { id: 9, categoria: "Pestañas & Mirada", titulo: "Pestañas 6D", precioNum: 2000, precioStr: "$2.000", descripcion: "Máximo volumen y dramatismo para una mirada profunda y súper llamativa.", details: "✨ Abanicos de alta densidad diseñados para un acabado frondoso y ultra glamoroso.", foto: "https://i.ibb.co/TMK38D4s/PESTA-AS-6-D.jpg" },
  { id: 11, categoria: "Cuidado Facial", titulo: "Piedra Guasha", precioNum: 3000, precioStr: "$3.000", descripcion: "Herramienta milenaria de masaje facial para mejorar la circulación.", details: "✨ Estimula el drenaje linfático y ayuda a reducir la hinchazón matutina.", foto: "https://i.ibb.co/9H2QbLTd/PIEDRA-GUASHA.jpg" },
  { id: 12, categoria: "Cuidado Facial", titulo: "Sérum Facial", precioNum: 3500, precioStr: "$3.500", descripcion: "Concentrado nutritivo de rápida absorción que revitaliza e hidrata.", details: "✨ Fórmula de alta potencia diseñada para penetrar en las capas profundas de la piel.", foto: "https://i.ibb.co/sdBwyjdJ/S-rum.jpg" },
  { id: 13, categoria: "Cuidado Facial", titulo: "Parche para Ojeras", precioNum: 700, precioStr: "$700", descripcion: "Tratamiento intensivo que revitaliza tu mirada al instante.", details: "✨ Efecto refrescante y descongestivo que hidrata la zona delicada del contorno.", foto: "https://i.ibb.co/qMJpGF9g/PARCHE-PARA-OJERAS.jpg" },
  { id: 14, categoria: "Cuidado Facial", titulo: "Mascarilla Facial (Clásica)", precioNum: 1000, precioStr: "$1.000", descripcion: "Revitaliza tu piel con un boost de hidratación profunda.", details: "✨ Mascarilla diseñada para limpiar impurezas y devolverle el brillo natural.", badge: "Nuevo", foto: "https://i.ibb.co/0j88gVg8/MASCARILLA-FACIAL-4.jpg" },
  { id: 15, categoria: "Cuidado Facial", titulo: "Mascara de Gel para Ojos", precioNum: 5000, precioStr: "$5.000", descripcion: "Alivio instantáneo para una mirada descansada y fresca.", details: "✨ Diseñada específicamente para reducir bolsas, ojeras y signos de cansancio.", foto: "https://i.ibb.co/JTKGM01/MASCARA-DE-GEL-PARA-OJOS.jpg" },
  { id: 16, categoria: "Cuidado Facial", titulo: "Extractor de Comedores Facial", precioNum: 3500, precioStr: "$3.500", descripcion: "Herramienta esencial para una limpieza profunda sin impurezas.", details: "✨ Diseñado para remover puntos negros de forma higiénica y precisa.", foto: "https://i.ibb.co/B2H5V9pv/EXTRACTOR-DE-COMEDORES-FACIAL.jpg" }
];

function guardarCarritoLocalStorage() {
  try {
    localStorage.setItem('glow_beauty_cart', JSON.stringify(carrito));
  } catch (e) {
    console.warn("No se pudo guardar el carrito.", e);
  }
}

function cargarCarritoLocalStorage() {
  try {
    const guardado = localStorage.getItem('glow_beauty_cart');
    if (guardado) {
      carrito = JSON.parse(guardado);
      actualizarContadorCarrito();
      renderizarCarritoItems();
    }
  } catch (e) {
    console.warn("No se pudo cargar el carrito.", e);
  }
}

function renderizarProductos(lista) {
  const grid = document.getElementById('gridProductos');
  grid.innerHTML = '';
  
  if (lista.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:4rem 1rem;">No se encontraron productos disponibles.</p>`;
    return;
  }

  lista.forEach((p, index) => {
    const esAgotado = p.badge && p.badge.toLowerCase() === "agotado";
    const delay = (index % 12) * 0.04;
    
    grid.innerHTML += `
      <div class="product-card" style="animation-delay: ${delay}s;">
        ${p.badge ? `<span class="product-badge ${esAgotado ? 'agotado' : ''}">${p.badge}</span>` : ''}
        <div class="product-img-box" onclick="abrirModal(${p.id})">
          <img src="${p.foto}" alt="${p.titulo.replace(/"/g, '&quot;')}" loading="lazy">
        </div>
        <div class="product-content">
          <span class="product-category">${p.categoria}</span>
          <h3 class="product-title" onclick="abrirModal(${p.id})">${p.titulo}</h3>
          <p class="product-desc">${p.descripcion}</p>
          <div class="product-footer">
            <span class="product-price">${p.precioStr}</span>
            <button class="btn-primary-glow ${esAgotado ? 'disabled' : ''}" ${esAgotado ? 'disabled' : ''} onclick="agregarAlCarrito(${p.id})">
              ${esAgotado ? 'Agotado' : 'Agregar'}
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function filtrarProductos() {
  const texto = document.getElementById('searchInput').value.toLowerCase().trim();

  let resultado = productos.filter(p => {
    const coincideTexto = p.titulo.toLowerCase().includes(texto) || 
                         p.descripcion.toLowerCase().includes(texto) || 
                         p.categoria.toLowerCase().includes(texto);
    const coincideCat = (categoriaActiva === "Todos" || p.categoria === categoriaActiva);
    return coincideTexto && coincideCat;
  });

  renderizarProductos(resultado);
}

function filtrarPorCategoria(cat, elemento) {
  categoriaActiva = cat;
  document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
  elemento.classList.add('active');
  filtrarProductos();
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto || (producto.badge && producto.badge.toLowerCase() === "agotado")) return;
  
  const enCarrito = carrito.find(item => item.id === id);
  if (enCarrito) {
    enCarrito.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  guardarCarritoLocalStorage();
  actualizarContadorCarrito();
  renderizarCarritoItems();
  abrirCarrito();
}

function actualizarContadorCarrito() {
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  document.getElementById('cartCount').innerText = totalItems;
}

function renderizarCarritoItems() {
  const container = document.getElementById('cartItemsContainer');
  container.innerHTML = '';
  
  if (carrito.length === 0) {
    container.innerHTML = `<p style="text-align:center;color:var(--text-muted);margin-top:3rem;">Tu carrito está vacío.</p>`;
    document.getElementById('cartTotalPrice').innerText = "$0";
    return;
  }

  let total = 0;
  carrito.forEach(item => {
    total += item.precioNum * item.cantidad;
    container.innerHTML += `
      <div class="cart-item-card">
        <img src="${item.foto}" alt="${item.titulo.replace(/"/g, '&quot;')}">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.titulo}</div>
          <div class="cart-item-price">${item.precioStr} × ${item.cantidad}</div>
          <div class="cart-quantity-box">
            <button onclick="cambiarCantidad(${item.id}, -1)">−</button>
            <span>${item.cantidad}</span>
            <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="remove-cart-item" onclick="eliminarDelCarrito(${item.id})">Quitar</button>
      </div>
    `;
  });
  document.getElementById('cartTotalPrice').innerText = `$${total.toLocaleString('es-AR')}`;
}

function cambiarCantidad(id, cambio) {
  const item = carrito.find(i => i.id === id);
  if (item) {
    item.cantidad += cambio;
    if (item.cantidad <= 0) {
      carrito = carrito.filter(i => i.id !== id);
    }
  }
  guardarCarritoLocalStorage();
  actualizarContadorCarrito();
  renderizarCarritoItems();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);
  guardarCarritoLocalStorage();
  actualizarContadorCarrito();
  renderizarCarritoItems();
}

function abrirCarrito() { document.getElementById('cartDrawerOverlay').classList.add('active'); }
function cerrarCarrito() { document.getElementById('cartDrawerOverlay').classList.remove('active'); }
function cerrarCarritoAfuera(e) { if (e.target.id === 'cartDrawerOverlay') cerrarCarrito(); }

function enviarPedidoWhatsApp(e) {
  if (carrito.length === 0) {
    e.preventDefault();
    alert("Tu carrito está vacío.");
    return;
  }
  let mensaje = "¡Hola! Me gustaría hacer el siguiente pedido:\n\n";
  carrito.forEach(i => {
    mensaje += `• ${i.cantidad}x ${i.titulo} (${i.precioStr})\n`;
  });
  mensaje += "\n¡Muchas gracias!";
  document.getElementById('whatsappCheckoutBtn').href = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
}

function abrirModal(id) {
  const p = productos.find(item => item.id === id);
  if (!p) return;

  const esAgotado = p.badge && p.badge.toLowerCase() === "agotado";

  document.getElementById('modalCat').innerText = p.categoria;
  document.getElementById('modalTitle').innerText = p.titulo;
  document.getElementById('modalPrice').innerText = p.precioStr;
  document.getElementById('modalDetailsText').innerText = p.detalles || p.descripcion;
  document.getElementById('modalMainImg').src = p.foto;

  const modalBtn = document.getElementById('modalAddCartBtn');
  if (esAgotado) {
    modalBtn.innerText = 'Agotado';
    modalBtn.className = 'btn-primary-glow disabled';
    modalBtn.disabled = true;
    modalBtn.onclick = null;
  } else {
    modalBtn.innerText = 'Agregar al Carrito 🛍️';
    modalBtn.className = 'btn-primary-glow';
    modalBtn.disabled = false;
    modalBtn.onclick = () => {
      agregarAlCarrito(p.id);
      cerrarModal();
    };
  }

  document.getElementById('productModal').classList.add('active');
}

function cerrarModal() { document.getElementById('productModal').classList.remove('active'); }
function cerrarModalAfuera(e) { if (e.target.id === 'productModal') cerrarModal(); }

// Inicialización de la tienda
cargarCarritoLocalStorage();
filtrarProductos();
