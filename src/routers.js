import DepositForm from "./components/DepositForm"
import WithdrawForm from "./components/WithdrawForm"
import FundTransferForm from "./components/FundTransferForm"
import HomePage from "./components/HomePage"
const Routerarr = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/home',
        element: <HomePage/>
    },
    {
        path: '/DepositForm',
        element: <DepositForm/>
    },
    {
        path: '/WithdrawForm',
        element:<WithdrawForm/>
    },
    {
        path: '/FundTransferForm',
        element: <FundTransferForm/>
    }
]

export default Routerarr