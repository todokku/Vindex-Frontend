import queryString from 'query-string'

export const queryToWord = (qs:string) => {
    const queryParsed = queryString.parse(qs, {arrayFormat: 'comma'})
    const queryWord = queryParsed.q as string[]
    if(!queryWord) return ""
    else if(typeof queryWord == "string") return queryWord
    else return queryWord.join(' ')
}

export const queryToScope = (qs:string) => {
    const queryParsed = queryString.parse(qs, {arrayFormat: 'comma'})
    const queryScope = queryParsed.t as string
    if(!queryScope) return "Tag"
    else return queryScope
}