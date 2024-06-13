'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"

export async function shareMeal(formData) {
  'use server'
  
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('creator'),
    creator_email: formData.get('creator_email')
  }
  await saveMeal(meal);
  redirect('/meals')
}