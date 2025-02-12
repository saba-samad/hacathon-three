import React from 'react';
// import star from "@/app/assets/star.png";
import logo from "@/app/assets/logo.png";
// import { Card} from './ui/card';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card";
  import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";


import Image from "next/image";

const NoAccessCart = () => {
  return (
    <>
   <div className='flex items-center justify-center py-12 md:py-32 bg-gray-100 p-4'>
    <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
<div className='flex justify-center'>
    <Image
    src={ logo}
    alt='star'
    width={200} height={200}
    className='mb-4'
    />
</div>

<CardTitle className='2xl font-bold text-center'>welcome back</CardTitle>
</CardHeader>
<CardContent className='space-y-4'>
<p className="text-muted-foreground text-center">
            Log in to view your cart items and checkout. Don&rsquo;t miss out on
            your favorite products!
          </p>
          <SignInButton mode='modal'> 
            <Button className='w-full' size='lg'>sign in</Button>
         </SignInButton>
</CardContent>
{/*  */}
< CardFooter className='flex flex-col space-y-2'>
<div className='text-sm text-muted-foreground text-center'>
Don&rsquo;t have an account?
</div>
<SignUpButton mode='modal'>
<Button variant="outline" className='w-full' size='lg'>Create an account</Button>
</SignUpButton>
</CardFooter>

    </Card>
   </div>
    </>
  )
}

export default NoAccessCart
