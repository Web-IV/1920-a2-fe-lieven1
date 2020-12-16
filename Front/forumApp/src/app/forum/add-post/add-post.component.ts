import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../post.model';
import { Forum } from '../forum.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Input() public forum: Forum;
  @Input() public repliesTo?: Post;
  @Output() public newPost = new EventEmitter<Post>();
  public post: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.post = this.fb.group({
      content: ['']
    });
  }

  onSubmit() {
    this.newPost.emit(new Post(this.post.value.content, this.forum.id, null, null, this.repliesTo));
  }

}
