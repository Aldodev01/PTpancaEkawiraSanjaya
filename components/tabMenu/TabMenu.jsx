import './TabMenu.css'

const TabMenu = ({show}) =>{
    return(
        <div className="modalNav" style={{
            transform : show ? 'translatey(0)' : 'translateY(-90vh)',
        }}>
            <h3>COMPANY PROFILE</h3>
            <h3>PRODUCT</h3>
            <h3 onClick={()=>{
                window.location.href = "/project"
            }}>PROJECT</h3>
            <h3 onClick={()=>{
                window.location.href = "/contact"
            }}>CONTACT</h3>
            <h3 onClick={()=>{
                window.location.href = "/e-comm"
            }}>E-COMM PLAN</h3>
        </div>
    )
}

export default TabMenu