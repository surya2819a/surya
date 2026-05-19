const Number = () => {
    const Num = [1,2,3,4,5,6,7,8,9,10]
    const EvenNum = Num.filter((n) => n%2 === 0);
    const OddNum = Num.filter((n) => n%2 !== 0);
    const Datas = ["apple" , "bannana" , "grapes" , "orange"];
             Datas.lastIndexOf("grapes")
    const n = [2,3,4];
    
    
    
    return (<>
    <h1>Using an Number Method</h1>
    <p>Number = {num}</p>
    <p>Even Number = {EvenNum}</p>
    <p>Odd Number = {OddNum}</p>
    <p>Datas = {Datas}</p>
    <p> n = {n}</p>
    
    
    
    
    
    
    
    </>
    
  )
}

export default Number