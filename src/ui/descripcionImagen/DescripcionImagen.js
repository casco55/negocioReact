import React from 'react';
import monitor from '../../components/images/monitor.jpg'

export const DescripcionImagen = () => {
    return (
        <>
            <div className="container-fluid ">
                <div className="row position-relative mt-5">
                    <div className="col-6 position-relative texto-descripcion-imagen d-flex">
                        <p className="text-dark my-auto fondo-difuso py-5 px-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem perspiciatis fuga quasi. Ad labore quis, impedit nam unde rerum esse culpa similique repellendus cum perferendis illum, alias deserunt numquam?</p>
                    </div>
                    <div className="col-6 position-relative imagen-descripcion-imagen ">
                        <img className="img-fluid" src={monitor} alt="programas pymes" />
                    </div>
                </div>
            </div>
        </>
    )
}
