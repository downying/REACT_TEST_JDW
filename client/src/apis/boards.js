import axios from 'axios'

// 게시글 목록
export const list = () => axios.get("/boards")

// 게시글 조회
export const select = (no) => axios.get(`/boards/read/${no}`)

// 게시글 등록
export const insert = (title, writer, content) => axios.post("/boards/insert", {title, writer, content})

// 게시글 수정
export const update = (no, title, writer, content) => axios.put("/boards/update", {no, title, writer, content})

// 게시글 삭제
export const remove = (no) => axios.delete(`/boards/delete/${no}`)