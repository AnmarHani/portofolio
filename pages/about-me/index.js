export const getStaticProps = async() => { 
    let response = await fetch('https://api.linkedin.com/v2/rest/people/(id:{123})')
    let data = await response.json()
  
    return {
      props: {
        account: data
      }
    }
}

export default function index(props){
    console.log(props.account)
}