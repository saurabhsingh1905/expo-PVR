import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'c4ttcef1',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  token:
    'skxkHjZ8fyKIzDAmJacKRglFYkQWI4UtZUp7jt5w4N1X5j7LxJXMvdZNEItF8m0Pw1jvhzlm4AIgN15aAsdIMUAydmzcvCwnCFs6srJdbgmZjHkIknaZ2P2TeogBJ2lfcsgMK7pJPZ3kl4zcrPcLgSQkDOCcL8aaPo62fH5HqLzDEjyYE8rh',
})
