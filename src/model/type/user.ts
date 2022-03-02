type user = {
    id: string,
    name: string
}

type extendUser = user & {
    number: number
}

// 선언적 확장 불가능

export default user