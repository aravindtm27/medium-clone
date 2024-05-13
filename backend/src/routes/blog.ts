import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {decode, sign, verify} from 'hono/jwt'
import { createblogInput } from "@joamon123/medium-common";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string 
    },
    Variables: {
      userId: number,
    }
}>();

blogRouter.use('/', async (c,next) => {
    const header = c.req.header("Authorization") || "";
    try{
      const response = await verify(header, c.env.JWT_SECRET);
      if(response){
        c.set("userId", response.id);
        await next();
      }else{
        c.status(403)
        return c.json({error:"unauthorized"}) ;
      }
    }catch(e){
      c.status(411);
      return c.json({
        error: "unable to authorize"
      })
    }
  })

blogRouter.get('/get/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const id = c.req.param("id");
try{
    const blog =  await prisma.post.findFirst({
      where:{
          id: Number(id)
      }
    })

  return c.json({
      blog
  })
}catch(e){
    c.status(411);
    return c.json({
        error: "couldn't get the blog"
    })
  }
})
  
blogRouter.get('/bulk', async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blogs = await prisma.post.findMany()

    return c.json({
      blogs
    })
  })
  
blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const body = await c.req.json();

      const {success} = createblogInput.safeParse(body);
      if(!success){
        c.status(411);
        return c.json({
          message: "credentials not correct"
        })
      }

      const userId = c.get('userId');
      console.log(userId)

      try{
        const blog =  await prisma.post.create({
          data:{  
              title: body.title,
              content: body.content,
              published: true,
              authorId: Number(userId)
          } 
        })
      return c.json({
         blog
      })
      }catch(e){
        console.log(e);
        return c.json({
          error: "error while fetching"
        })
      }
  })
  
blogRouter.put('/', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const body = await c.req.json();

      const blog =  await prisma.post.update({
        where:{
            id: body.id
        },
        data:{  
            title: body.title,
            content: body.content,
            published: true,
            authorId: 1
        } 
      })

    return c.json({
      id: blog.id
    })
  })