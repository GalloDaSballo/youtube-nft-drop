import dynamic from 'next/dynamic'
const Login = dynamic(
  () => import('../Login'),
  { ssr: false }
)

const Header:React.FC = () => {
  return (
    <div>
      <Login />
    </div>
  )
}

export default Header