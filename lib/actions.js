'use server'

export async function shareMeal(formData) {
  'use server'
  
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('creator'),
    create_email: formData.get('create_email')
  }
}