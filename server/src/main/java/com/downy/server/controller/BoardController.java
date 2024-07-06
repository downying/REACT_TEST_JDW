package com.downy.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.downy.server.dto.Board;
import com.downy.server.service.BoardService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/boards")
public class BoardController {
    
    @Autowired
    private BoardService boardService;

    /**
     * 게시글 목록
     * @return
     */ 
    @GetMapping("")
    public ResponseEntity<?> getAll() {
        try {
            List <Board> BoardList = boardService.list();
            return new ResponseEntity<>(BoardList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 게시글 조회
     * @param no
     * @return
     */
    @GetMapping("/read/{no}")
    public ResponseEntity<?> getOne(@PathVariable("no") int no) {
        try {
            Board board = boardService.select(no);
            return new ResponseEntity<>(board, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 게시글 등록
     * @param board
     * @return
     */
    @PostMapping("/insert")
    public ResponseEntity<?> create(@RequestBody Board board) {
        try {
            int result = boardService.insert(board);
            log.info("result ::::::::::::::::: " + result);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 게시글 수정
     * @param board
     * @return
     */
    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Board board) {
        try {
            int result = boardService.update(board);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * 게시글 삭제
     * @param no
     * @return
     */
    @DeleteMapping("/delete/{no}")
    public ResponseEntity<?> delete(@PathVariable("no") int no) {
        try {
            int result = boardService.delete(no);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
