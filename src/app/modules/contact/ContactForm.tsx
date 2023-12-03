'use client'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  Input,
  FormControl,
  FormErrorMessage,
  Textarea,
  FormLabel,
  Spinner,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import useWeb3Forms from '@web3forms/react'

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
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm<Inputs>()

  const [isSuccess, setIsSuccess] = useState(false)
  const [message, setMessage] = useState('')

  const apiKey =
    process.env.NEXT_PUBLIC_PUBLIC_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE'

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: `Kevin's Porfolio`,
      subject: 'New Contact Message from your Portfolio website',
    },
    onSuccess: () => {
      setIsSuccess(true)
      setMessage('Thank you for submitting! You will be contacted shortly.')
      reset()
    },
    onError: () => {
      setIsSuccess(false)
      setMessage('Something went wrong. Please try later.')
    },
  })

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <section className='flex flex-col items-center gap-8'>
      <h1 className='self-center text-2xl font-medium md:text-3xl'>Contact</h1>
      <h2>
        If you want to get in touch with me, please fill out the form below and
        I'll get back to you as early as I can.
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='md:w-3/4 flex w-full flex-col justify-center gap-12'
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
              <FormLabel className='absolute -top-8 left-2 text-gray-400 transition-all peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-8 peer-focus:left-2'>
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
              <FormLabel className='absolute -top-8 left-2 text-gray-400 transition-all peer-placeholder-shown:left-2 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-8 peer-focus:left-2'>
                Message
              </FormLabel>
              <FormErrorMessage>Please enter a message.</FormErrorMessage>
            </FormControl>
          )}
        />
        {/* include validation with required or other standard HTML validation rules */}

        {/* errors will return when field validation fails  */}
        {isSuccess ? (
          <p className='font-bold text-green-600'>{message}</p>
        ) : (
          <Button
            type='submit'
            className='border-2 border-solid hover:bg-green-600 hover:text-black'
          >
            {isSubmitting ? <Spinner /> : 'Send me an email'}
          </Button>
        )}
      </form>
    </section>
  )
}
