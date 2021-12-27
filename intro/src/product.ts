
export interface Producto{
    desc: string;
    precio: number;
}




export const calculaISV = ( productos: Producto[] ): [number, number] => {

    let total = 0;
    productos.forEach( ( { precio } ) => {
        total += precio;
    });
    return [total, total * 0.15];
};