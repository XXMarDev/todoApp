import { useState } from 'react'
import '../Styles/ecommerce.css'
import gamingAcc from '../photos/gaming.jpg'
import elettronica from '../photos/eletronics.jpg'
import toys from '../photos/toys.jpg'
import school from '../photos/school.jpg'


function Ecommerce() {

    const [object, setObject] = useState([
        {
            titolo1: 'Gaming accessories',
            titolo2: 'Electronics',
            titolo3: 'Toys',
            titolo4: 'School essential',
            titolo5: 'Home & Kitchen',
            titolo6: 'Health & Personal Care',
            titolo7: 'Beauty picks',
            titolo8: 'Books'
        },
        {
            buy: 'Buy now'
        },
    ])


    return (
        <div>
            <div className='nav'>
                <div>
                    <input type="search" className='search' placeholder='Search Amazon' />

                    <button className='enter'>Enter</button>

                    <div className='logACC'>
                        <p><a href="/login" className='log'>Accedi</a></p>
                        <p>
                            <a href="" className='log'>Registrati</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='contdescAmazon'>
                <p className='descAmazon'>You are on amazon.com. You can also shop on Amazon Italy for millions of products with fast local delivery.</p>
            </div>
            <div className='containerObject'>
                <div className="object1">
                    {
                        object.map(elemento => (
                            <div>
                                <h1 className='titoloObject'>{elemento.titolo1}
                                </h1>
                            </div>
                        ))
                    }
                    <button className='buyObject'>
                        Buy now
                    </button>
                    <p className='price'>
                        $24.99
                    </p>
                    <img src={gamingAcc} alt="" className='imgObject' />
                </div>
                <div className='object2'>
                    {
                        object.map(elemento => (
                            <div>
                                <h1 className='titoloObject'>
                                    {
                                        elemento.titolo2
                                    }
                                </h1>
                            </div>

                        ))
                    }
                    <button className='buyObject'>
                        Buy now
                    </button>
                    <p className='price'>
                        $259.99
                    </p>
                    <img src={elettronica} alt="" className='imgObject' />
                </div>
                <div className='object3'>
                    {
                        object.map(elemento => (
                            <div>
                                <h1 className='titoloObject'>{elemento.titolo3}</h1>
                            </div>
                        ))
                    }
                    <button className='buyObject'>Buy now</button>
                    <p className='price'>
                        $15.99
                    </p>
                    <img src={toys} alt="" className='imgObject' />
                </div>
                <div className="object4">
                    {
                        object.map(elemento => (
                            <div>
                                <h1 className='titoloObject'>{
                                    elemento.titolo4
                                }</h1>
                            </div>
                        ))
                    }
                    <button className='buyObject'>Buy now</button>
                    <p className='price'>
                        $24.99
                    </p>
                    <img src={school} alt="" className='imgObject'/>
                </div>
            </div>
        </div>
    )

}

export default Ecommerce