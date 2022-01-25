function Title() {
    return (
       <h1>Imersão React</h1>       
    );
}


// componente react
function HomePage() {
    return (
        <div>
            <Title>Boas vindas de Volta !</Title>
            <h3>Discord  - Alura Mitrix</h3>

           <style jsx>{`         
            
            h1 {
                color:  red;
            }

            `}</style>

        </div>
    );
}
  
export default HomePage