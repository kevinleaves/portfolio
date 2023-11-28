'use client'
import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import {
  Input,
  FormControl,
  FormErrorMessage,
  Textarea,
  FormLabel,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

type Inputs = {
  name: string
  email: string
  message: string
}

interface Props {}

export default function Contact({}: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()

  const [formClicked, setFormClicked] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFormClicked(true)
    // console.log('button clicked')
    reset()
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full flex-col justify-center gap-12'
    >
      {/* register your input into the hook by invoking the "register" function */}
      <Controller
        name='name'
        control={control}
        rules={{ required: true }}
        defaultValue=''
        render={({ field }) => (
          <FormControl isRequired isInvalid={errors.name ? true : false}>
            <Input
              {...field}
              variant='outline'
              placeholder='Name'
              className='peer rounded-lg bg-slate-100 placeholder-transparent'
            />
            <FormLabel className='peer-focus:text-gray absolute -top-8 left-2 text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-8'>
              Full Name
            </FormLabel>
            <FormErrorMessage>Please enter your name.</FormErrorMessage>
          </FormControl>
        )}
      />
      <Controller
        name='email'
        control={control}
        defaultValue=''
        rules={{
          required: { value: true, message: 'Email Address is required.' },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Please input a valid email address.',
          },
        }}
        render={({ field }) => (
          <FormControl isRequired isInvalid={errors.email ? true : false}>
            <Input
              {...field}
              variant='outline'
              isInvalid={errors.email ? true : false}
              errorBorderColor='crimson'
              placeholder='Email Address'
              className='peer rounded-lg bg-slate-100 placeholder-transparent'
            />
            <FormLabel className='absolute -top-8 left-2 text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-8 peer-focus:left-2'>
              Email Address
            </FormLabel>
            <FormErrorMessage>Please enter a valid email.</FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name='message'
        control={control}
        rules={{ required: true }}
        defaultValue=''
        render={({ field }) => (
          <FormControl isRequired isInvalid={errors.message ? true : false}>
            <Textarea
              {...field}
              variant='outline'
              placeholder='Send me a message!'
              className=' peer rounded-lg bg-slate-100 placeholder-transparent'
            />
            <FormLabel className='absolute -top-8 left-2 text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-8 peer-focus:left-2'>
              Message
            </FormLabel>
            <FormErrorMessage>Please enter a message.</FormErrorMessage>
          </FormControl>
        )}
      />
      {/* include validation with required or other standard HTML validation rules */}

      {/* errors will return when field validation fails  */}
      {formClicked ? (
        <p className='font-bold text-green-600'>
          Thank you for submitting! You will be contacted shortly.
        </p>
      ) : (
        <Button
          type='submit'
          className='border-2 border-solid hover:bg-green-600 hover:text-black'
        >
          Send me an email
        </Button>
      )}
    </form>
  )
}
