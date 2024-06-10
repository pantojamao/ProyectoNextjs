
import { CarCounter } from "@/app/shopping-cart/components";
import { Metadata } from "next";

export const metadata:Metadata={
    title: 'Shopping cart',
    description: 'Contador simple'

}
export default function CounterPage() {
    
   
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito </span>
           <CarCounter />
        </div >
    );
}
