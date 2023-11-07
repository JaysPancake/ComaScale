import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private snackBar: MatSnackBar, private router: Router) {}
  title = 'ComaScale';

  goToLink(url:string){
    window.open(url,"_blank");
  }

  copyUrl() {
    // Create a dummy input to copy the string
    let dummy = document.createElement('input');
    // Get the text to copy
    let text = window.location.href;
    // Add the dummy input to the body
    document.body.appendChild(dummy);
    // Set the dummy input's value
    dummy.value = text;
    // Select the text
    dummy.select();
    // Copy the text
    document.execCommand('copy');
    // Remove the dummy input
    document.body.removeChild(dummy);
  
    // Display the snackbar
    this.snackBar.open('URL copied to clipboard', 'Close', {
      duration: 3000
    });
  }
}
