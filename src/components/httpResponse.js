import { Box } from "@mui/system"

export function Loading() {
    return <Body title="လုပ်ဆောင်ိနန်ပါရေ" message="ကျေးဇူးပြုလို့ စကေချေ စောင့်ပါ"/>
}
function Body (p){
    return(
        <Box sx={{ p: 2}} style={{minHeight:`20vh`}}>
            <h2>{p.title}</h2>
            <p>{p.message}</p>
        </Box>
    )
}