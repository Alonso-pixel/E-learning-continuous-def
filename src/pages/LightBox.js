import { useState } from "react";
import Video from "yet-another-react-lightbox/plugins/video";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import slidessrc from "./Data.js";

export default function LightBox() {
    const [open, setOpen] = useState(true);
    return (
      <>
        {/* <button type="button" onClick={() => setOpen(true)}>
          Open Lightbox
        </button> */}
  
        <Lightbox
          plugins={[Video]}
          open={open}
          close={() => setOpen(false)}
          slides={slidessrc}
          // {[
          //   { src: "image1.jpg" },
          //   { src: "image2.jpg" },
          //   { src: "image3.jpg" },
          //   {
          //     type: "youtube",
          //     src: "https://www.youtube.com/embed/L5oxYg4rMwo?si=XA7WptLOnDCZgUbq",
          //     title: "Entrevistas - 4",
          //     width: 2160,
          //     height: 1215
          //   }
          // ]}
          //NOTA: Funcion que ajusta los videos de youtube correctamente
          render={{
            slide: ({ slide, rect }) => {
              // slidessrc.indexOf(slide) === slidessrc.length ? setTest(true) : 0;
  
              // slidessrc.indexOf(slide) === slidessrc.length
              //   ? setTest(true)
              //   : null;
  
              //NOTA:poner un boton de hacer examen debajo, connectarlo con google forms
  
              return(
              slide.type === "youtube" ? (
                
                  <iframe
                    width={
                      Math.min(
                      slide.width,
                      rect.width,
                      (slide.width * rect.height) / slide.height
                    )}
                    height={Math.min(
                      slide.height,
                      rect.height,
                      (slide.height * rect.width) / slide.width
                    )}
                    src={slide.src}
                    title={slide.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : undefined) // prettier-ignore
            }
          }}
        />
      </>
    );
  }