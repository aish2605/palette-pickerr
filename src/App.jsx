import React ,{useRef,useState} from 'react'
import './App.css'
import screenshot from "html2canvas"

function App(){
  const[tcolor, setTColor] = useState('000')
  const[bgCol, setBgCol] = useState('000')
  
  const image = useRef()

  const textColor= (colorName)=>{
    image.current.style.color=colorName
  }

  const bgColor= (colorName)=>{
    image.current.style.backgroundColor=colorName
  }

  const fontFamily = (fontName) =>{
    image.current.style.fontFamily=fontName
  }

  const downloadImage = () =>{
    screenshot(image.current).then(canvas => {
      const imageData = canvas.toDataURL("image/png")
      const link = document.createElement('a')
      link.href=imageData
      link.download="font-fusion.png"
      link.click()
  });
  }
  const setBackground = (imageUrl) => {
    image.current.style.backgroundImage = `url(${imageUrl})`;
    image.current.style.backgroundSize = "cover";
    image.current.style.backgroundPosition= "center";
};
  

return(
<>
<div className='heading'>
  
          <h1 id="heading">Palette-Picker</h1>
        </div>
        
        <div className='parent'>
          
            <div id='child1'>
                <h1  ref={image}  contentEditable="true" id="text">Write your text...</h1>
                <button id="download-btn" onClick={downloadImage}>Download</button>
            </div>

            <div id='child2'>
                <div id='text-color'>
                  <h2 id="sub-heading">Choose your text Color</h2>
                  <div id="text-color-names">
                    <button id='violet' onClick={()=>{textColor('violet')}}></button>
                    <button id='red' onClick={()=>{textColor('red')}}></button>
                    <button id='green' onClick={()=>{textColor('green')}}></button>
                    <button id='coral' onClick={()=>{textColor('coral')}}></button>
                    <button id='purple' onClick={()=>{textColor('purple')}}></button>
                    <button id='yellow' onClick={()=>{textColor('yellow')}}></button>
                    <button id='pink' onClick={()=>{textColor('pink')}}></button>
                    <button id='skyblue' onClick={()=>{textColor('skyblue')}}></button>
                    <button id='orange' onClick={()=>{textColor('orange')}}></button>
                    <button id='pink' onClick={()=>{textColor('pink')}}></button>
                    <button id='blue' onClick={()=>{textColor('blue')}}></button>
                   
                    
                    <input 
                    type='color'
                    value={tcolor}
                    onChange={(event)=>{
                      setTColor(event.target.value)
                      textColor(event.target.value)
                    }}
                    />
                  </div>

                </div>

                <div id='bg-color'>
                  <h2 id='sub-heading'>Choose your Background Color</h2>
                  <div id="text-color-names">
                  <button id='violet' onClick={()=>{bgColor('violet')}}></button>
                    <button id='red' onClick={()=>{bgColor('red')}}></button>
                    <button id='green' onClick={()=>{bgColor('green')}}></button>
                    <button id='coral' onClick={()=>{bgColor('coral')}}></button>
                    <button id='purple' onClick={()=>{bgColor('purple')}}></button>
                    <button id='yellow' onClick={()=>{bgColor('yellow')}}></button>
                    <button id='pink' onClick={()=>{bgColor('pink')}}></button>
                    <button id='skyblue' onClick={()=>{bgColor('skyblue')}}></button>
                    <button id='orange' onClick={()=>{bgColor('orange')}}></button>
                    <button id='pink' onClick={()=>{bgColor('pink')}}></button>
                    <button id='blue' onClick={()=>{bgColor('blue')}}></button>
                    
                  
                    <input 
                    type='color'
                    value={bgCol}
                    onChange={(event)=>{
                      setBgCol(event.target.value)
                      bgColor(event.target.value)
                    }}
                    />
                  </div>
                </div>
                  <div id="font-family">
                  <h2 id='sub-heading'>Choose your Background Color</h2>
                  <div id='fonts'>
               
               <h1 id='times-new' onClick={()=>{fontFamily('Times New Roman')}}>Hello</h1>
               <h1 id='cursive' onClick={()=>{fontFamily('cursive')}}>Hello</h1>
               <h1 id='verdana' onClick={()=>{fontFamily('verdana')}}>Hello</h1>
               <h1 id='arial'  onClick={()=>{fontFamily('arial')}}>Hello</h1>
               <h1 id='impact' onClick={()=>{fontFamily('Impact')}}>Hello</h1>
             </div>
                  </div>

                  <div id="bg-images">
                    <h2 id ='sub-heading'>Choose your background Image</h2>
                    <div id="images">
                      <button  id="bg-img1"onClick={()=>setBackground('/images/sky.jpg')}/>

                      <button  id="bg-img2"onClick={()=>setBackground('/images/beach.webp')}/>

                      <button  id="bg-img3"onClick={()=>setBackground('/images/blueflower.jpg')}/>

                      <button  id="bg-img4"onClick={()=>setBackground('/images/forest.jpg')}/>

                      <button  id="bg-img5"onClick={()=>setBackground('/images/flower.avif')}/>

                      <button  id="bg-img6"onClick={()=>setBackground('/images/ocean.jpg')}/>

                      <button  id="bg-img7"onClick={()=>setBackground('/images/sun.jpg')}/>

                      <button  id="bg-img8"onClick={()=>setBackground('/images/sunshine.avif')}/>

                      <button  id="bg-img9"onClick={()=>setBackground('/images/pinkflower.jpg')}/>

                    </div>

                  </div>
                
            </div>
        </div>


       
    </>
  );
}


export default App;