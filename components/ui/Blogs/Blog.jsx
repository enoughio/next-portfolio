import {Topic} from "@/components/ui/Blogs/Topic";



function Blog () {
  return (
    <div className=" border-2 p-1 md:p-3 w-full overflow-hidden air:bg-red-600">
      <h1 className="text-xl font-bold py-2 ">heading Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, nostrum.</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus assumenda accusantium neque, harum fugiat nemo sapiente cupiditate 
      </p>
      <div className="flex gap-1 md:gap-2 flex-wrap  md:flex-nowrap md:flex-row justify-start items-center my-5">
      <Topic topic="Frontend Development" variant="secondary" size="sm" />
      <Topic topic="Backend Development" variant="secondary" size="sm" />
      <Topic topic="Fullstack Development" variant="secondary" size="sm" />
     
      </div>
    </div>
  );
}



export default Blog;





import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export function Bloger() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="w-full text-2xl" >Create project</CardTitle>
        <CardDescription className="w-full text-md " >Deploy your new project in one-click Vercel provides tools and infrastructure to deploy apps and features at scale. Deploy Now. Vercel provides tools and infrastructure to deploy apps and features at scale. Deploy Now.</CardDescription>
      </CardHeader>

      <CardFooter className=" mt-0 pt-0 flex justify-start gap-2">
      <Badge variant="custom">web dev</Badge>
      <Badge variant="custom">Badge</Badge>
      <Badge variant="custom">Badge</Badge>
      <Badge variant="custom">Badge</Badge>

      </CardFooter>
    </Card>
  )
}
