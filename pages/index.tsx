import type { NextPage } from 'next'
import { ClockCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const Home: NextPage = () => {
  return (
    <div>
      <a className="text-3xl flex justify-center font-bold " href="https://www.miladcodes.com">
        miladcodes.com
      </a>

      <Button type="primary">Primary Button</Button>
    </div>
  )
}

export default Home
