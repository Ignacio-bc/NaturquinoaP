import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-reproductorpodcast',
  templateUrl: './reproductorpodcast.component.html',
  styleUrls: ['./reproductorpodcast.component.css']
})
export class ReproductorpodcastComponent implements AfterViewInit {
  audioSource = '.\audioquinoa\Beneficiosdelaquinoa.mp3';
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit(): void {
    this.audioPlayer.nativeElement.oncanplaythrough = () => {
   
    };
  }

  play(): void {
    if (this.audioPlayer && this.audioPlayer.nativeElement.readyState >= 2) {
      this.audioPlayer.nativeElement.play();
    }
  }

  pause(): void {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.pause();
    }
  }

  stop(): void {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.pause();
      this.audioPlayer.nativeElement.currentTime = 0;
    }
  }
}