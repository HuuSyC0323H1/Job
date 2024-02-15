package com.be.model.app;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@Table(name = "songs")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long song_id;

    private String songName;
    @Column(length = 3000)
    private String linkSong;
    private String linkImgSong;
    private LocalDate releaseTime;
    private int playSong;
    private String country;
}
