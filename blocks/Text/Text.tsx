import { Heading } from '@components/Heading'

interface TextProps {
  title: string
  description: string
}

const Text = ({ title, description }: TextProps) => {
  return (
    <div className='py-30'>
      <Heading title={title} />
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}

export default Text
