import { Component } from '@angular/core';

@Component({
  selector: 'app-historias-aviacion',
  templateUrl: './historias-aviacion.page.html',
  styleUrls: ['./historias-aviacion.page.scss'],
})
export class HistoriasAviacionPage {
  historias = [
    {
      titulo: 'El Espíritu de San Luis',
      descripcion: 'En 1927, Charles Lindbergh realizó el primer vuelo transatlántico en solitario y sin escalas desde Nueva York hasta París. A bordo del "Spirit of St. Louis", desafió la fatiga, la oscuridad y la incertidumbre durante más de 33 horas, convirtiéndose en un héroe mundial y símbolo del avance tecnológico de su época.',
      expandida: false
    },
    {
      titulo: 'Hermanos Wright',
      descripcion: 'El 17 de diciembre de 1903, Orville y Wilbur Wright realizaron el primer vuelo controlado y sostenido en un avión motorizado. Su creación, el Flyer, logró mantenerse en el aire por 12 segundos. Ese breve instante en Kitty Hawk cambió el rumbo de la historia para siempre.',
      expandido: false
    },
    {
      titulo: 'Amelia Earhart',
      descripcion: 'En 1932, Amelia Earhart se convirtió en la primera mujer en cruzar el océano Atlántico en solitario. Su valentía y determinación la convirtieron en un ícono de la aviación y del empoderamiento femenino. En 1937, desapareció misteriosamente durante su intento dar la vuelta al mundo, dejando un legado eterno.',
      expandido: false
    },
    {
      titulo: 'Concorde',
      descripcion: 'El Concorde, desarrollado por Francia y Reino Unido, fue el primer avión comercial supersónico. Volando a más del doble de la velocidad del sonido, unió Londres y Nueva York en menos de 3.5 horas. En servicio entre 1976 y 2003, su diseño elegante y rendimiento excepcional marcaron una era dorada de la aviación de lujo.',
      expandido: false
    },
    {
      titulo: 'El Milagro en el Hudson',
      descripcion: 'El 15 de enero de 2009, el vuelo 1549 de US Airways perdió ambos motores tras impactar con una bandada de aves. El Capitán "Sully" Sullenberger realizó un aterrizaje de emergencia sobre el río Hudson en Nueva York, salvando a las 155 personas a bordo.',
      expandido: false
    },
    {
      titulo: 'El Puente Aéreo de Berlín',
      descripcion: 'Entre 1948 y 1949, durante la Guerra Fría, las fuerzas aliadas organizaron un puente aéreo masivo para abastecer a Berlín Occidental, sitiada por la Unión Soviética. Más de 200,000 vuelos transportaron alimentos, medicinas y carbón, demostrando que la aviación podía ser un arma de paz y resistencia.',
      expandido: false
    },
    {
      titulo: 'El Boeing 747',
      descripcion: 'Introducido en 1970, el Boeing 747 revolucionó la aviación comercial con su tamaño colosal y su doble nivel. Permitió a millones de personas viajar largas distancias a precios accesibles, marcando el inicio de la era moderna del transporte aéreo.',
      expandid: false
    },
    {
      titulo: 'Los Doolittle Raiders',
      descripcion: 'En abril de 1942, tras el ataque a Pearl Harbor, un escuadrón de bombarderos B-25 despegó desde un portaaviones hacia Tokio. Aunque sabían que probablemente no regresarían, su misión levantó la moral de los aliados. Fue una hazaña de valentía, precisión y estrategia aérea.',
      expandido: false
    }
  ];
  toggleHistoria(index: number) {
    this.historias[index].expandido = !this.historias[index].expandido;
  }
}
