import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from 'hono/jwt'
import { signupInput } from "@joamon123/medium-common";


export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string 
    }
}>();

userRouter.post('/signup', async (c) => {

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "credentials not correct"
      })
    }
  try{
    const user =  await prisma.user.create({
      data:{  
        email: body.email,
        password: body.password,
        name: body.name
      } 
    })
  
    const token = await sign({id: user.id}, c.env.JWT_SECRET)
  
    c.redirect('/api/v1/blog');
  
    return c.json({jwt: token})
  }catch(e){
    console.log(e);
    return c.text('Invalid credentials');
  }
  })
  
userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "credentials not correct"
      })
    }
  try{
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    });
  
    if(!user){
      c.status(403);
      return c.json({error: "user not found or the credentials are incorrect"})
    }
  
    const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json({jwt});
  }catch(e){
    c.status(411);
    return c.text('Invalid login details')
  }
  
  })