import { useSelector } from "react-redux"

const ChildComponent = () => {
    const count = useSelector((store) => store.counter.count)
    
    return(<div>
        <h2>Child : Current count {count}</h2>
    </div>)
}

export default ChildComponent