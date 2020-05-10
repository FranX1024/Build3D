/*>>> FAXMACHINE <<<*/

var application_base64 = "PGh0bWw+CiAgPGhlYWQ+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Imh0dHA6Ly93aW5kb3dzOTMubmV0L2Mvc3lzL3NraW5zL3c5My5jc3M/dj0yLjMuOCI+CiAgPC9oZWFkPgogIDxib2R5IHN0eWxlPSJtYXJnaW46IDA7IGZvbnQtc2l6ZTogMTJweCI+CiAgICA8ZGl2IHN0eWxlPSJ3aWR0aDogNDg0cHg7IGhlaWdodDogNjQwcHg7IGJhY2tncm91bmQtY29sb3I6ICNBQUFBQUE7Ij4KICAgICAgPGRpdiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQzsiPgogICAgICAgIDxidXR0b24gaWQ9InNhdmUiIHN0eWxlPSJib3JkZXI6IDFweCBpbnNldDsgbWFyZ2luOiAwIj5TQVZFPC9idXR0b24+CiAgICAgICAgPGJ1dHRvbiBpZD0ib3BlbiIgc3R5bGU9ImJvcmRlcjogMXB4IGluc2V0OyBtYXJnaW46IDAiPk9QRU48L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGlkPSJjbGVhciIgc3R5bGU9ImJvcmRlcjogMXB4IGluc2V0OyBtYXJnaW46IDAiPkNMRUFSPC9idXR0b24+CiAgICAgIDwvZGl2PgogICAgICA8Y2FudmFzIHdpZHRoPSI0ODAiIGhlaWdodD0iNDgwIiBzdHlsZT0id2lkdGg6IDQ4MHB4OyBoZWlnaHQ6IDQ4MHB4OyBib3JkZXI6IDJweCBpbnNldDsiIGlkPSJ2b3hlbHNjcmVlbiI+PC9jYW52YXM+CiAgICAgIDxkaXYgc3R5bGU9Im92ZXJmbG93LXk6IGF1dG87IHdpZHRoOiA0ODBweDsgaGVpZ2h0OiAxMjVweDsgbWFyZ2luLXRvcDogMnB4OyBib3JkZXI6IDJweCBpbnNldDsiPgogICAgICAgIDxkaXY+CiAgICAgICAgICA8c3Bhbj4gRk9WOiA8L3NwYW4+IDxpbnB1dCB0eXBlPSJyYW5nZSIgbWF4PSIxMjAiIHZhbHVlPSI5MCIgaWQ9ImZvdiIgc3R5bGU9IndpZHRoOiAzNjBweDsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAxMDBweDsiPgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXY+CiAgICAgICAgICA8c3Bhbj4gRElTVDogPC9zcGFuPiA8aW5wdXQgdHlwZT0icmFuZ2UiIG1heD0iNiIgdmFsdWU9IjIiIGlkPSJkaXN0IiBzdHlsZT0id2lkdGg6IDM2MHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDEwMHB4OyI+CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdj4KICAgICAgICAgIDxzcGFuPiBZLVBPUzogPC9zcGFuPiA8aW5wdXQgdHlwZT0icmFuZ2UiIG1heD0iMTYiIHZhbHVlPSIwIiBpZD0ieXBvcyIgc3R5bGU9IndpZHRoOiAzNjBweDsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAxMDBweDsiPgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXY+PC9kaXY+CiAgICAgICAgPGhyPjxjZW50ZXI+CiAgICAgICAgCTxidXR0b24gb25jbGljaz0idGlsZV9jb2xvcjNkPWdldENvbG9yKCcjMDAwMDAwJykiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwIj4mIzE2MDsmIzE2MDsmIzE2MDsmIzE2MDs8L2J1dHRvbj4KICAgICAgICAJPGJ1dHRvbiBvbmNsaWNrPSJ0aWxlX2NvbG9yM2Q9Z2V0Q29sb3IoJyMwMDAwRkYnKSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICMwMDAwRkYiPiYjMTYwOyYjMTYwOyYjMTYwOyYjMTYwOzwvYnV0dG9uPgogICAgICAgIAk8YnV0dG9uIG9uY2xpY2s9InRpbGVfY29sb3IzZD1nZXRDb2xvcignIzAwRkYwMCcpIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogIzAwRkYwMCI+JiMxNjA7JiMxNjA7JiMxNjA7JiMxNjA7PC9idXR0b24+CiAgICAgICAgCTxidXR0b24gb25jbGljaz0idGlsZV9jb2xvcjNkPWdldENvbG9yKCcjMDBGRkZGJykiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjMDBGRkZGIj4mIzE2MDsmIzE2MDsmIzE2MDsmIzE2MDs8L2J1dHRvbj4KICAgICAgICAJPGJ1dHRvbiBvbmNsaWNrPSJ0aWxlX2NvbG9yM2Q9Z2V0Q29sb3IoJyNGRjAwMDAnKSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNGRjAwMDAiPiYjMTYwOyYjMTYwOyYjMTYwOyYjMTYwOzwvYnV0dG9uPgogICAgICAgIAk8YnV0dG9uIG9uY2xpY2s9InRpbGVfY29sb3IzZD1nZXRDb2xvcignI0ZGMDBGRicpIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogI0ZGMDBGRiI+JiMxNjA7JiMxNjA7JiMxNjA7JiMxNjA7PC9idXR0b24+CiAgICAgICAgCTxidXR0b24gb25jbGljaz0idGlsZV9jb2xvcjNkPWdldENvbG9yKCcjRkZGRjAwJykiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjAwIj4mIzE2MDsmIzE2MDsmIzE2MDsmIzE2MDs8L2J1dHRvbj4KICAgICAgICAJPGJ1dHRvbiBvbmNsaWNrPSJ0aWxlX2NvbG9yM2Q9Z2V0Q29sb3IoJyNGRkZGRkYnKSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNGRkZGRkYiPiYjMTYwOyYjMTYwOyYjMTYwOyYjMTYwOzwvYnV0dG9uPgogICAgICAgIAk8YnV0dG9uIG9uY2xpY2s9InRpbGVfY29sb3IzZD1nZXRDb2xvcignIzAwMDA4OCcpIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogIzAwMDA4OCI+JiMxNjA7JiMxNjA7JiMxNjA7JiMxNjA7PC9idXR0b24+CiAgICAgICAgCTxidXR0b24gb25jbGljaz0idGlsZV9jb2xvcjNkPWdldENvbG9yKCcjMDA4ODAwJykiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4ODAwIj4mIzE2MDsmIzE2MDsmIzE2MDsmIzE2MDs8L2J1dHRvbj4KICAgICAgICAJPGJ1dHRvbiBvbmNsaWNrPSJ0aWxlX2NvbG9yM2Q9Z2V0Q29sb3IoJyMwMDg4ODgnKSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICMwMDg4ODgiPiYjMTYwOyYjMTYwOyYjMTYwOyYjMTYwOzwvYnV0dG9uPgogICAgICAgIAk8YnV0dG9uIG9uY2xpY2s9InRpbGVfY29sb3IzZD1nZXRDb2xvcignIzg4MDAwMCcpIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogIzg4MDAwMCI+JiMxNjA7JiMxNjA7JiMxNjA7JiMxNjA7PC9idXR0b24+CiAgICAgICAgCTxidXR0b24gb25jbGljaz0idGlsZV9jb2xvcjNkPWdldENvbG9yKCcjODgwMDg4JykiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjODgwMDg4Ij4mIzE2MDsmIzE2MDsmIzE2MDsmIzE2MDs8L2J1dHRvbj4KICAgICAgICAJPGJ1dHRvbiBvbmNsaWNrPSJ0aWxlX2NvbG9yM2Q9Z2V0Q29sb3IoJyM4ODg4MDAnKSIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICM4ODg4MDAiPiYjMTYwOyYjMTYwOyYjMTYwOyYjMTYwOzwvYnV0dG9uPgogICAgICAgIAk8YnV0dG9uIG9uY2xpY2s9InRpbGVfY29sb3IzZD1nZXRDb2xvcignIzg4ODg4OCcpIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogIzg4ODg4OCI+JiMxNjA7JiMxNjA7JiMxNjA7JiMxNjA7PC9idXR0b24+CiAgICAgICAgPC9jZW50ZXI+PGhyPgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogICAgPHNjcmlwdCBuYW1lPSJlbmdpbmUiPgogICAgICAvKiA+Pj4gRiBBIFggTSBBIEMgSCBJIE4gRSA8PDwgKi8KCiAgICAgIGNvbnN0IFdJRFRIID0gNDgwLCBIRUlHSFQgPSA0ODA7CgogICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZveGVsc2NyZWVuJyk7CiAgICAgIHZhciBvZnNjciA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsKICAgICAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpOwogICAgICB2YXIgb2ZjID0gb2ZzY3IuZ2V0Q29udGV4dCgnMmQnKTsKCiAgICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTsKICAgICAgLy9jdHguc2NhbGUoMiwgMik7CgogICAgICBvZnNjci53aWR0aCA9IFdJRFRIOwogICAgICBvZnNjci5oZWlnaHQgPSBIRUlHSFQ7CgogICAgICAvKiBmdW5jdGlvbiBmb3IgZHJhd2luZyA0LXNpZGVkIHBvbHlnb25zICovCgogICAgICBmdW5jdGlvbiBkcmF3cG9seShwMSwgcDIsIHA0LCBwMywgY29sb3IpIHsKICAgICAgICBvZmMuZmlsbFN0eWxlID0gY29sb3I7CiAgICAgICAgb2ZjLmJlZ2luUGF0aCgpOwogICAgICAgIG9mYy5tb3ZlVG8ocDEueCwgcDEueSk7CiAgICAgICAgb2ZjLmxpbmVUbyhwMy54LCBwMy55KTsKICAgICAgICBvZmMubGluZVRvKHA0LngsIHA0LnkpOwogICAgICAgIG9mYy5saW5lVG8ocDIueCwgcDIueSk7CiAgICAgICAgb2ZjLmNsb3NlUGF0aCgpOwogICAgICAgIG9mYy5maWxsKCk7CiAgICAgICAgb2ZjLmJlZ2luUGF0aCgpOwogICAgICAgIG9mYy5tb3ZlVG8ocDEueCwgcDEueSk7CiAgICAgICAgb2ZjLmxpbmVUbyhwMy54LCBwMy55KTsKICAgICAgICBvZmMubW92ZVRvKHAzLngsIHAzLnkpOwogICAgICAgIG9mYy5saW5lVG8ocDQueCwgcDQueSk7CiAgICAgICAgb2ZjLm1vdmVUbyhwNC54LCBwNC55KTsKICAgICAgICBvZmMubGluZVRvKHAyLngsIHAyLnkpOwogICAgICAgIG9mYy5tb3ZlVG8ocDIueCwgcDIueSk7CiAgICAgICAgb2ZjLmxpbmVUbyhwMS54LCBwMS55KTsKICAgICAgICBvZmMuY2xvc2VQYXRoKCk7CiAgICAgICAgb2ZjLnN0cm9rZSgpOwogICAgICB9CgogICAgICBjbGFzcyBQb2ludDJEIHsKCiAgICAgICAgY29uc3RydWN0b3IoeCwgeSkgewoKICAgICAgICAgIHRoaXMueCA9IHg7CiAgICAgICAgICB0aGlzLnkgPSB5OwogICAgICAgIH0KICAgICAgfQoKICAgICAgY2xhc3MgUG9pbnQzRCB7CgogICAgICAgIGNvbnN0cnVjdG9yKHgsIHksIHopIHsKCiAgICAgICAgICB0aGlzLnggPSB4OwogICAgICAgICAgdGhpcy55ID0geTsKICAgICAgICAgIHRoaXMueiA9IHo7CiAgICAgICAgfQogICAgICB9CgogICAgICBjbGFzcyBQbGFpbiB7CgogICAgICAgIGNvbnN0cnVjdG9yKHAxLCBwMiwgcDMsIHA0LCBjb2xvciwgcG9zMSwgcG9zMikgewoKICAgICAgICAgIHRoaXMucCA9IFtwMSwgcDIsIHAzLCBwNF07CgogICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yOwoKICAgICAgICAgIHRoaXMucG9zMSA9IHBvczE7CgogICAgICAgICAgdGhpcy5wb3MyICA9IHBvczI7CiAgICAgICAgfQogICAgICB9CgogICAgICBmdW5jdGlvbiByb3RhdGUoeCwgeSwgYW5nbGUpIHsKCiAgICAgICAgcmV0dXJuIFt4ICogYW5nbGUuY29zIC0geSAqIGFuZ2xlLnNpbiwgeCAqIGFuZ2xlLnNpbiArIHkgKiBhbmdsZS5jb3NdOwogICAgICB9CgogICAgICBmdW5jdGlvbiByb3RhdGUzZCh4LCB5LCB6LCBsciwgdWQpIHsKCiAgICAgICAgW3gsIHpdID0gcm90YXRlKHgsIHosIGxyKTsKCiAgICAgICAgW3ksIHpdID0gcm90YXRlKHksIHosIHVkKTsKCiAgICAgICAgcmV0dXJuIFt4LCB5LCB6XTsKICAgICAgfQoKICAgICAgLyoKCiAgICAgIG5ldyBDYW1lcmEoIDxOdW1iZXIgPSBmaWVsZCBvZiB2aWV3PiApIHJldHVybnMgQ2FtZXJhCgogICAgICBDYW1lcmEucm90YXRlKCA8TnVtYmVyID0gbGVmdC1yaWdodCByb3RhdGlvbj4sIDxOdW1iZXIgPSB1cC1kb3duIHJvdGF0aW9uPiApIHJldHVybnMgdm9pZAoKICAgICAgQ2FtZXJhLnByb2plY3QoIDxQb2ludDNEPiApIHJldHVybnMgUG9pbnQyRAoKICAgICAgQ2FtZXJhLnNldEZvdiggPE51bWJlciA9IGZpZWxkIG9mIHZpZXc+ICkKCiAgICAgICovCgogICAgICBjbGFzcyBDYW1lcmEgewoKICAgICAgICBjb25zdHJ1Y3Rvcihmb3YsIGRpc3QpIHsKCiAgICAgICAgICB0aGlzLmNzeiA9IDAuNiAvIDg7CiAgICAgICAgICB0aGlzLnRvcCA9IDA7CgogICAgICAgICAgdGhpcy5yb3RMUiA9IHt2YWw6IDAsIHNpbjogMCwgY29zOiAxfTsKICAgICAgICAgIHRoaXMucm90VUQgPSB7dmFsOiAwLCBzaW46IDAsIGNvczogMX07CgogICAgICAgICAgdGhpcy5kaXN0ID0gZGlzdDsKICAgICAgICAgIHRoaXMuZm92X2N0ZyA9IDEgLyBNYXRoLnRhbihmb3YgKiBNYXRoLlBJIC8gMzYwKTsKICAgICAgICB9CgogICAgICAgIHJvdGF0ZSh4eiwgeXopIHsKCiAgICAgICAgICB0aGlzLnJvdExSLnZhbCAtPSB4ejsKICAgICAgICAgIHRoaXMucm90VUQudmFsIC09IHl6OwoKICAgICAgICAgIHRoaXMucm90TFIuc2luID0gTWF0aC5zaW4odGhpcy5yb3RMUi52YWwpOwogICAgICAgICAgdGhpcy5yb3RMUi5jb3MgPSBNYXRoLmNvcyh0aGlzLnJvdExSLnZhbCk7CiAgICAgICAgICB0aGlzLnJvdFVELnNpbiA9IE1hdGguc2luKHRoaXMucm90VUQudmFsKTsKICAgICAgICAgIHRoaXMucm90VUQuY29zID0gTWF0aC5jb3ModGhpcy5yb3RVRC52YWwpOwogICAgICAgIH0KCiAgICAgICAgc2V0Rm92KGZvdikgewoKICAgICAgICAgIHRoaXMuZm92X2N0ZyA9IDEgLyBNYXRoLnRhbihmb3YgKiBNYXRoLlBJIC8gMzYwKTsKICAgICAgICB9CgogICAgICAgIHByb2plY3QocDNkKSB7CgogICAgICAgICAgdmFyIHggPSAocDNkLnggLSA4KSAqIHRoaXMuY3N6OwogICAgICAgICAgdmFyIHkgPSAodGhpcy50b3AgLSBwM2QueSkgKiB0aGlzLmNzejsKICAgICAgICAgIHZhciB6ID0gKHAzZC56IC0gOCkgKiB0aGlzLmNzejsKCiAgICAgICAgICBbeCwgeSwgel0gPSByb3RhdGUzZCh4LCB5LCB6LCB0aGlzLnJvdExSLCB0aGlzLnJvdFVEKTsKCiAgICAgICAgICB6ICs9IHRoaXMuZGlzdDsKCiAgICAgICAgICB2YXIgZCA9IHRoaXMuZm92X2N0ZyAvIHo7CgogICAgICAgICAgcmV0dXJuIG5ldyBQb2ludDJEKFdJRFRIICogKDAuNSArIHggKiBkKSwgSEVJR0hUICogKDAuNSArIHkgKiBkKSk7CiAgICAgICAgfQoKICAgICAgICBnZXREaXN0KHAzZCkgewoKICAgICAgICAgIHZhciB4ID0gKHAzZC54IC0gOCkgKiB0aGlzLmNzejsKICAgICAgICAgIHZhciB5ID0gKHRoaXMudG9wIC0gcDNkLnkpICogdGhpcy5jc3o7CiAgICAgICAgICB2YXIgeiA9IChwM2QueiAtIDgpICogdGhpcy5jc3o7CgogICAgICAgICAgW3gsIHksIHpdID0gcm90YXRlM2QoeCwgeSwgeiwgdGhpcy5yb3RMUiwgdGhpcy5yb3RVRCk7CgogICAgICAgICAgeiArPSB0aGlzLmRpc3Q7CgogICAgICAgICAgcmV0dXJuIHggKiB4ICsgeSAqIHkgKyB6ICogejsKICAgICAgICB9CiAgICAgIH0KICAgIDwvc2NyaXB0PgogICAgPHNjcmlwdCBuYW1lPSJtYWluIj4KICAgIAkvKiBjb25zdGFudHMgKi8KCiAgICAgIGNvbnN0IEVNUFRZID0gKDEgPDwgMTUpOwoKICAgICAgLyogZ2V0IHBvc2l0aW9uIG51bWJlciBpbiBtYXAgKi8KCiAgICAgIGZ1bmN0aW9uIGdldFBvcyh4LCB5LCB6KSB7CgogICAgICAgIHJldHVybiAoeCA8PCA4KSB8ICh5IDw8IDQpIHwgejsKICAgICAgfQoKICAgICAgLyogZ2V0IGNvbG9yIG51bWJlciAqLwoKICAgICAgZnVuY3Rpb24gZ2V0Q29sb3IocykgewoKICAgICAgICByZXR1cm4gKE51bWJlcignMHgnICsgcy5zdWJzdHIoMSwgMikpIDw8IDE2KSB8IChOdW1iZXIoJzB4JyArIHMuc3Vic3RyKDMsIDIpKSA8PCA4KSB8IE51bWJlcignMHgnICsgcy5zdWJzdHIoNSwgMikpOwogICAgICB9CgogICAgICAvKiBnZXQgc3F1YXJlIG9mIGRpc3RhbmNlIG9mIGEgc2lkZSBvZiBzcXVhcmUgZnJvbSBjYW1lcmEgKi8KCiAgICAgIGZ1bmN0aW9uIGRpc3QoY2FtLCBwbGkpIHsKCiAgICAgICAgdmFyIG1hID0gMDsKCiAgICAgICAgZm9yKHZhciBpIGluIHBsaS5wKSB7CgogICAgICAgICAgbWEgPSBNYXRoLm1heChtYSwgY2FtZXJhLmdldERpc3QocGxpLnBbaV0pKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiBtYTsKICAgICAgfQoKICAgICAgLyogY2hlY2sgaWYgcG9pbnQgaXMgaW5zaWRlIGEgcG9seWdvbiAqLwoKICAgICAgZnVuY3Rpb24gaW5zaWRlKHBvaW50LCBwb2x5KSB7CgogICAgICAgICAgdmFyIHggPSBwb2ludC54LCB5ID0gcG9pbnQueTsKCiAgICAgICAgICB2YXIgdnMgPSBwb2x5LnA7CgogICAgICAgICAgdmFyIGluc2lkZSA9IGZhbHNlOwogICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSB2cy5sZW5ndGggLSAxOyBpIDwgdnMubGVuZ3RoOyBqID0gaSsrKSB7CiAgICAgICAgICAgICAgdmFyIHhpID0gdnNbaV0ueCwgeWkgPSB2c1tpXS55OwogICAgICAgICAgICAgIHZhciB4aiA9IHZzW2pdLngsIHlqID0gdnNbal0ueTsKCiAgICAgICAgICAgICAgdmFyIGludGVyc2VjdCA9ICgoeWkgPiB5KSAhPSAoeWogPiB5KSkKICAgICAgICAgICAgICAgICAgJiYgKHggPCAoeGogLSB4aSkgKiAoeSAtIHlpKSAvICh5aiAtIHlpKSArIHhpKTsKICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0KSBpbnNpZGUgPSAhaW5zaWRlOwogICAgICAgICAgfQoKICAgICAgICAgIHJldHVybiBpbnNpZGU7CiAgICAgIH07CgogICAgICB2YXIgY2FtZXJhID0gbmV3IENhbWVyYSg5MCwgMik7IC8vIENhbWVyYSBvYmplY3QKCiAgICAgIGNhbWVyYS5yb3RhdGUoLU1hdGguUEkgKiAwLjI1LCAtTWF0aC5QSSAqIDAuMjUpOwoKICAgICAgLyogbWFwIGZvciB0ZXN0aW5nLCB0aGlzIHBhcnQgb2YgY29kZSB3aWxsIGxhdGVyIGJlIHJlcGxhY2VkICovCgogICAgICB2YXIgbWFwID0gbmV3IFVpbnQzMkFycmF5KDQwOTYpOwoKICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDMyNzY4OyBpKyspIG1hcFtpXSA9IEVNUFRZOwoKICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIGZvcih2YXIgaiA9IDA7IGogPCAxNjsgaisrKSBtYXBbZ2V0UG9zKGksIDAsIGopXSA9IDI1NSA8PCA4OwoKICAgICAgLyogcmVuZGVyICovCgogICAgICB2YXIgcGxhaW5zM0QgPSBbXSwgcHJvamVjdGlvbnMgPSBbXTsKCiAgICAgIC8qIGNoZWNrIGlmIHBsYWNlIGluIHRoZSBtYXAgaXMgZW1wdHkgKi8KCiAgICAgIGZ1bmN0aW9uIGlzRW1wdHkoeCwgeSwgeikgewoKICAgICAgICByZXR1cm4geCA8IDAgfHwgeSA8IDAgfHwgeiA8IDAgfHwgeCA+IDE1IHx8IHkgPiAxNSB8fCB6ID4gMTUgfHwgbWFwW2dldFBvcyh4LCB5LCB6KV0gPT0gRU1QVFk7CiAgICAgIH0KCiAgICAgIC8qIGxlZnQgcGFkICovCgogICAgICBTdHJpbmcucHJvdG90eXBlLmxwYWQgPSBmdW5jdGlvbihuLCBjKSB7CgogICAgICAgIHMgPSAnJzsKCiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IE1hdGgubWF4KG4gLSB0aGlzLmxlbmd0aCwgMCk7IGkrKykgewoKICAgICAgICAgIHMgKz0gJzAnOwogICAgICAgIH0KCiAgICAgICAgcmV0dXJuIHMgKyB0aGlzOwogICAgICB9CgogICAgICAvKiBmdW5jdGlvbiBmb3IgbG9hZGluZyBhIDNibSAoYml0bWFwIGZvcm1hdCBmb3IgOTNEICkgKi8KCiAgICAgIGZ1bmN0aW9uIGxvYWRNYXAobWFwKSB7CgogICAgICAgIHBsYWluczNEID0gW107CgogICAgICAgIGZvcih2YXIgeCA9IDA7IHggPCAxNjsgeCsrKSB7CiAgICAgICAgICBmb3IodmFyIHkgPSAwOyB5IDwgMTY7IHkrKykgewogICAgICAgICAgICBmb3IodmFyIHogPSAwOyB6IDwgMTY7IHorKykgewogICAgICAgICAgICAgIGlmKG1hcFtnZXRQb3MoeCwgeSwgeildICE9IEVNUFRZKSB7CgogICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gJyMnICsgKChtYXBbZ2V0UG9zKHgsIHksIHopXSA+PiAxNikgJiAyNTUpLnRvU3RyaW5nKDE2KS5scGFkKDIsICcwJykgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChtYXBbZ2V0UG9zKHgsIHksIHopXSA+PiA4KSAmIDI1NSkudG9TdHJpbmcoMTYpLmxwYWQoMiwgJzAnKSArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWFwW2dldFBvcyh4LCB5LCB6KV0gJiAyNTUpLnRvU3RyaW5nKDE2KS5scGFkKDIsICcwJyk7CgogICAgICAgICAgICAgICAgaWYoaXNFbXB0eSh4ICsgMSwgeSwgeikpIHBsYWluczNELnB1c2gobmV3IFBsYWluKAoKICAgICAgICAgICAgICAgICAgbmV3IFBvaW50M0QoeCArIDEsIHkgKyAxLCB6ICsgMSksCiAgICAgICAgICAgICAgICAgIG5ldyBQb2ludDNEKHggKyAxLCB5ICsgMSwgeiksCiAgICAgICAgICAgICAgICAgIG5ldyBQb2ludDNEKHggKyAxLCB5LCB6KSwKICAgICAgICAgICAgICAgICAgbmV3IFBvaW50M0QoeCArIDEsIHksIHogKyAxKSwKCiAgICAgICAgICAgICAgICAgIGNvbG9yLCBuZXcgUG9pbnQzRCh4LCB5LCB6KSwgbmV3IFBvaW50M0QoeCArIDEsIHksIHopCiAgICAgICAgICAgICAgICApKTsKICAgICAgICAgICAgICAgIGlmKGlzRW1wdHkoeCwgeSAtIDEsIHopKSBwbGFpbnMzRC5wdXNoKG5ldyBQbGFpbigKCiAgICAgICAgICAgICAgICAgIG5ldyBQb2ludDNEKHgsIHksIHopLAogICAgICAgICAgICAgICAgICBuZXcgUG9pbnQzRCh4LCB5LCB6ICsgMSksCiAgICAgICAgICAgICAgICAgIG5ldyBQb2ludDNEKHggKyAxLCB5LCB6ICsgMSksCiAgICAgICAgICAgICAgICAgIG5ldyBQb2ludDNEKHggKyAxLCB5LCB6KSwKCiAgICAgICAgICAgICAgICAgIGNvbG9yLCBuZXcgUG9pbnQzRCh4LCB5LCB6KSwgbmV3IFBvaW50M0QoeCwgeSAtIDEsIHopCiAgICAgICAgICAgICAgICApKTsKICAgICAgICAgICAgICAgIGlmKGlzRW1wdHkoeCwgeSwgeiArIDEpKSBwbGFpbnMzRC5wdXNoKG5ldyBQbGFpbigKCiAgICAgICAgICAgICAgICAgIG5ldyBQb2ludDNEKHgsIHkgKyAxLCB6ICsgMSksCiAgICAgICAgICAgICAgICAgIG5ldyBQb2ludDNEKHggKyAxLCB5ICsgMSwgeiArIDEpLAogICAgICAgICAgICAgICAgICBuZXcgUG9pbnQzRCh4ICsgMSwgeSwgeiArIDEpLAogICAgICAgICAgICAgICAgICBuZXcgUG9pbnQzRCh4LCB5LCB6ICsgMSksCgogICAgICAgICAgICAgICAgICBjb2xvciwgbmV3IFBvaW50M0QoeCwgeSwgeiksIG5ldyBQb2ludDNEKHgsIHksIHogKyAxKQogICAgICAgICAgICAgICAgKSk7CiAgICAgICAgICAgICAgICBpZihpc0VtcHR5KHggLSAxLCB5LCB6KSkgcGxhaW5zM0QucHVzaChuZXcgUGxhaW4oCgogICAgICAgICAgICAgICAgICBuZXcgUG9pbnQzRCh4LCB5LCB6KSwKICAgICAgICAgICAgICAgICAgbmV3IFBvaW50M0QoeCwgeSwgeiArIDEpLAogICAgICAgICAgICAgICAgICBuZXcgUG9pbnQzRCh4LCB5ICsgMSwgeiArIDEpLAogICAgICAgICAgICAgICAgICBuZXcgUG9pbnQzRCh4LCB5ICsgMSwgeiksCgogICAgICAgICAgICAgICAgICBjb2xvciwgbmV3IFBvaW50M0QoeCwgeSwgeiksIG5ldyBQb2ludDNEKHggLSAxLCB5LCB6KQogICAgICAgICAgICAgICAgKSk7CiAgICAgICAgICAgICAgICBpZihpc0VtcHR5KHgsIHkgKyAxLCB6KSkgcGxhaW5zM0QucHVzaChuZXcgUGxhaW4oCgogICAgICAgICAgICAgICAgICBuZXcgUG9pbnQzRCh4LCB5ICsgMSwgeiksCiAgICAgICAgICAgICAgICAgIG5ldyBQb2ludDNEKHggKyAxLCB5ICsgMSwgeiksCiAgICAgICAgICAgICAgICAgIG5ldyBQb2ludDNEKHggKyAxLCB5ICsgMSwgeiArIDEpLAogICAgICAgICAgICAgICAgICBuZXcgUG9pbnQzRCh4LCB5ICsgMSwgeiArIDEpLAoKICAgICAgICAgICAgICAgICAgY29sb3IsIG5ldyBQb2ludDNEKHgsIHksIHopLCBuZXcgUG9pbnQzRCh4LCB5ICsgMSwgeikKICAgICAgICAgICAgICAgICkpOwogICAgICAgICAgICAgICAgaWYoaXNFbXB0eSh4LCB5LCB6IC0gMSkpIHBsYWluczNELnB1c2gobmV3IFBsYWluKAoKICAgICAgICAgICAgICAgICAgbmV3IFBvaW50M0QoeCwgeSwgeiksCiAgICAgICAgICAgICAgICAgIG5ldyBQb2ludDNEKHggKyAxLCB5LCB6KSwKICAgICAgICAgICAgICAgICAgbmV3IFBvaW50M0QoeCArIDEsIHkgKyAxLCB6KSwKICAgICAgICAgICAgICAgICAgbmV3IFBvaW50M0QoeCwgeSArIDEsIHopLAoKICAgICAgICAgICAgICAgICAgY29sb3IsIG5ldyBQb2ludDNEKHgsIHksIHopLCBuZXcgUG9pbnQzRCh4LCB5LCB6IC0gMSkKICAgICAgICAgICAgICAgICkpOwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgfQogICAgICAgIH0KICAgICAgfQoKICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMTkxOTcwJzsKCiAgICAgIC8qIGZ1bmN0aW9uIGZvciByZW5kZXJpbmcgc2NyZWVuICovCgogICAgICBmdW5jdGlvbiByZW5kZXIoKSB7CgogICAgICAgIHByb2plY3Rpb25zID0gW107CgogICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgV0lEVEgsIEhFSUdIVCk7CiAgICAgICAgb2ZjLmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTsKCiAgICAgICAgcGxhaW5zM0Quc29ydCgoYSwgYikgPT4gZGlzdChjYW1lcmEsIGIpIC0gZGlzdChjYW1lcmEsIGEpKTsKCiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBsYWluczNELmxlbmd0aDsgaSsrKSB7CgogICAgICAgICAgZHJhd3BvbHkoLi4ucGxhaW5zM0RbaV0ucC5tYXAoeCA9PiBjYW1lcmEucHJvamVjdCh4KSksIHBsYWluczNEW2ldLmNvbG9yKTsKCiAgICAgICAgICBwcm9qZWN0aW9ucy5wdXNoKG5ldyBQbGFpbiguLi5wbGFpbnMzRFtpXS5wLm1hcCh4ID0+IGNhbWVyYS5wcm9qZWN0KHgpKSwgZGlzdChjYW1lcmEsIHBsYWluczNEW2ldKSwgcGxhaW5zM0RbaV0ucG9zMSwgcGxhaW5zM0RbaV0ucG9zMikpOwogICAgICAgIH0KCiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIFdJRFRILCBIRUlHSFQpOwoKICAgICAgICBjdHguZHJhd0ltYWdlKG9mc2NyLCAwLCAwKTsKICAgICAgfQoKICAgICAgdmFyIHRpbGVfY29sb3IzZCA9IDI1NTsgLy8gY29sb3Igb2YgdGlsZXMgdG8gYmUgcGxhY2VkCgogICAgICB2YXIga2V5ID0ge307CiAgICAgIHZhciBtb3VzZSA9IHtsZWZ0OiBmYWxzZSwgcmlnaHQ6IGZhbHNlLCB4OiAwLCB5OiAwLCBjb3VudDogMH07CgogICAgICB2YXIgdXBkYXRlM0RCID0gZnVuY3Rpb24oKSB7CgogICAgICAgIC8qIHJvdGF0aW9uIHN0dWZmICovCgogICAgICAgIGlmKGtleVs4N10pIGNhbWVyYS5yb3RhdGUoMCwgLU1hdGguUEkgLyA5MCk7CiAgICAgICAgaWYoa2V5WzgzXSkgY2FtZXJhLnJvdGF0ZSgwLCBNYXRoLlBJIC8gOTApOwogICAgICAgIGlmKGtleVs2OF0pIGNhbWVyYS5yb3RhdGUoLU1hdGguUEkgLyA5MCwgMCk7CiAgICAgICAgaWYoa2V5WzY1XSkgY2FtZXJhLnJvdGF0ZShNYXRoLlBJIC8gOTAsIDApOwoKICAgICAgICAvKiBtb3VzZSBzdHVmZiAqLwoKICAgICAgICBpZigobW91c2UubGVmdCB8fCBtb3VzZS5yaWdodCkgJiYgIW1vdXNlLmNvdW50KSB7CgogICAgICAgICAgdmFyIHBvczEgPSAtMSwgcG9zMiA9IC0xLCBkaSA9IDFlOTsgLy8gcG9zMSA9IHBvc2l0aW9uIG9mIGN1cnJlbnQgYmxvY2ssIHBvczIgPSBwb3NpdGlvbiBvZiBibG9jayB0aGlzIHNpZGUgaXMgZmFjaW5nIHRvd2FyZHMKCiAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcHJvamVjdGlvbnMubGVuZ3RoOyBpKyspIHsKCiAgICAgICAgICAgIGlmKGluc2lkZShtb3VzZSwgcHJvamVjdGlvbnNbaV0pICYmIHByb2plY3Rpb25zW2ldLmNvbG9yIDwgZGkpIHsKCiAgICAgICAgICAgICAgZGkgPSBwcm9qZWN0aW9uc1tpXS5jb2xvcjsgLy8gY29sb3IgYWN0cyBhcyBkaXN0YW5jZSBoZXJlIChkb24ndCBhc2sgd2h5LCB0aGVyZSdzIG5vIGdvb2QgYW5zd2VyKQoKICAgICAgICAgICAgICBwb3MxID0gcHJvamVjdGlvbnNbaV0ucG9zMTsKICAgICAgICAgICAgICBwb3MyID0gcHJvamVjdGlvbnNbaV0ucG9zMjsKICAgICAgICAgICAgfQogICAgICAgICAgfQoKICAgICAgICAgIGlmKHBvczEgIT0gLTEpIHsKCiAgICAgICAgICAgIGlmKG1vdXNlLmxlZnQpIG1hcFtnZXRQb3MocG9zMi54LCBwb3MyLnksIHBvczIueildID0gdGlsZV9jb2xvcjNkOwogICAgICAgICAgICBpZihtb3VzZS5yaWdodCkgbWFwW2dldFBvcyhwb3MxLngsIHBvczEueSwgcG9zMS56KV0gPSBFTVBUWTsKCiAgICAgICAgICAgIG1vdXNlLmNvdW50ID0gMTA7IC8vIG1vdXNlIGNvdW50IHByZXZlbnRzIHVuaW50ZW50aW9uYWwgYWN0aW9ucyBieSBkaXNhYmxpbmcgcGxhY2luZyBhbmQgZGVzdHJveWluZyBmb3IgNTAgbXMKCiAgICAgICAgICAgIGxvYWRNYXAobWFwKTsKICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIGlmKG1vdXNlLmNvdW50KSBtb3VzZS5jb3VudC0tOwoKICAgICAgICByZW5kZXIoKTsKICAgICAgfQoKICAgICAgdmFyIGNicjsKCiAgICAgIC8qIGV2ZW50IGxpc3RlbmVycyAqLwogICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiBrZXlbZS5rZXlDb2RlXSA9IHRydWUpOwogICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICBlID0+IGtleVtlLmtleUNvZGVdID0gZmFsc2UpOwogICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZSA9PiB7CiAgICAgICAgaWYoIWUuYnV0dG9uKSBtb3VzZS5sZWZ0ID0gZmFsc2U7CiAgICAgICAgZWxzZSBtb3VzZS5yaWdodCA9IGZhbHNlOwogICAgICAgIHJldHVybiBmYWxzZTsKICAgICAgfSk7CiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gewogICAgICAgIGlmKG1vdXNlLnggPCBjYnIubGVmdCB8fCBtb3VzZS54ID4gY2JyLnJpZ2h0IHx8IG1vdXNlLnkgPCBjYnIudG9wIHx8IG1vdXNlLnkgPiBjYnIuYm90dG9tKSByZXR1cm47CiAgICAgICAgaWYoIWUuYnV0dG9uKSBtb3VzZS5sZWZ0ID0gdHJ1ZTsKICAgICAgICBlbHNlIG1vdXNlLnJpZ2h0ID0gdHJ1ZTsKICAgICAgfSk7CiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gewoKICAgICAgICBjYnIgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vIGZvciBtb3VzZSBsb2NhdGlvbgogICAgICAgIG1vdXNlLnggPSBlLnBhZ2VYIC0gY2JyLmxlZnQ7CiAgICAgICAgbW91c2UueSA9IGUucGFnZVkgLSBjYnIudG9wOwogICAgICB9KTsKICAgICAgY2FudmFzLm9uY29udGV4dG1lbnUgPSBlID0+IGZhbHNlOyAvLyBjYXVzZSByaWdodCBjbGljayBpcyB1c2VkIGZvciBkZXN0cm95aW5nIGJsb2NrcwoKCiAgICAgIC8qCgogICAgICBFWFBPUlRTOgoKICAgICAgLSB1cGRhdGUzREIoKSwgdXNlIGl0IGluIHNldEludGVydmFsCiAgICAgIC0gY2FtZXJhLnNldEZvdihhbmdsZSkKICAgICAgLSBjYW1lcmEuZGlzdCA9IGRpc3RhbmNlIGZyb20gbW9kZWwKICAgICAgLSBjYW1lcmEudG9wID0geS1wb3NpdGlvbiBvZiB0aGUgbG93ZXN0IGxheWVyIG9mIG1hcAogICAgICAtIGxvYWRNYXAoVWludDMyQXJyYXkpID0gbG9hZCBhIG1hcCBpbnRvIHRoZSBlZGl0b3IKICAgICAgLSB0aWxlX2NvbG9yM2QgLSBhIG51bWJlciByZXByZXNlbnRpbmcgY3VycmVudCBmaWxsIGNvbG9yCiAgICAgIC0gZ2V0Q29sb3IoaHRtbCBjb2xvciBjb2RlKSAtIHJldHVybnMgYSBudW1iZXIgcHJlc2VudGluZyBnaXZlbiBjb2xvcgoKICAgICAgSU1QT1JUQU5UOgoKICAgICAgLSB3aGVuIHByb2dyYW0gbG9hZHMsIGl0IGZpbmRzIGEgY2FudmFzIGVsZW1lbnQgd2l0aCBpZCA9ICJ2b3hlbHNjcmVlbiIsCiAgICAgICAgbWFrZSBzdXJlIHRvIGhhdmUgdGhhdCBlbGVtZW50IHNvbWV3aGVyZSBiZWZvcmUgcnVubmluZyBwcm9ncmFtCgogICAgICAqLwoKICAgIDwvc2NyaXB0PgogICAgPHNjcmlwdCBuYW1lPSJhcHAiPgogICAgICBzZXRJbnRlcnZhbCh1cGRhdGUzREIsIDEwKTsKICAgICAgbG9hZE1hcChtYXApOwogICAgICAKICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvdicpLm9uaW5wdXQgPSBmdW5jdGlvbihlKSB7CgogICAgICAgIGNhbWVyYS5zZXRGb3YoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSk7CiAgICAgIH0KICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3QnKS5vbmlucHV0ID0gZnVuY3Rpb24oZSkgewoKICAgICAgICBjYW1lcmEuZGlzdCA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7CiAgICAgIH0KICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3lwb3MnKS5vbmlucHV0ID0gZnVuY3Rpb24oZSkgewoKICAgICAgICBjYW1lcmEudG9wID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTsKICAgICAgfQoKICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUnKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7CiAgICAgIAlwYXJlbnQuJHByb21wdCgiRW50ZXIgZGVzaXJlZCBmaWxlbmFtZSwgdGhlbiBzZWxlY3QgZm9sZGVyIHdoZXJlIHlvdSB3YW50IGl0IHNhdmVkLiIsIGZ1bmN0aW9uKGEsIGZuYW1lKSB7CiAgICAgIAkgIGlmKCFhKSByZXR1cm47CiAgICAgICAgICBwYXJlbnQuJGV4cGxvcmVyKCdhL2V0Yy8zREJ1aWxkZXIvbW9kZWxzLycsIHticm93c2U6IHRydWUsIGV4cGxvcmVyOiB0cnVlLCBvbmNsb3NlOiBmdW5jdGlvbihvaywgZmlsZSkgewogICAgICAgICAgICBpZiAob2spIHsKICAgICAgICAgICAgICB2YXIgcmQgPSAnJzsKICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgNDA5NjsgaSsrKSByZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChtYXBbaV0gPj4gMjQpICYgMjU1KSArICBTdHJpbmcuZnJvbUNoYXJDb2RlKChtYXBbaV0gPj4gMTYpICYgMjU1KSArICBTdHJpbmcuZnJvbUNoYXJDb2RlKChtYXBbaV0gPj4gOCkgJiAyNTUpICsgIFN0cmluZy5mcm9tQ2hhckNvZGUoKG1hcFtpXSkgJiAyNTUpOwogICAgICAgICAgICAgIHBhcmVudC4kZGIuc2V0KChmaWxlICsgZm5hbWUpLnNwbGl0KCcvJykuc2xpY2UoMSkuZmlsdGVyKHggPT4geCE9JycpLmpvaW4oJy8nKSwgcmQpOwogICAgICAgICAgICAgIHNldFRpbWVvdXQocGFyZW50LiRleHBsb3Jlci5yZWZyZXNoLCA1MDApOwogICAgICAgICAgICB9CiAgICAgICAgICB9fSk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZW4nKS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7CiAgICAgIAlwYXJlbnQuJGV4cGxvcmVyKCdhL2V0Yy8zREJ1aWxkZXIvbW9kZWxzLycsIHticm93c2U6IHRydWUsIGV4cGxvcmVyOiB0cnVlLCBvbmNsb3NlOiBmdW5jdGlvbihvaywgZmlsZSkgewoJCSAgaWYgKG9rKSB7CiAgICAJCXBhcmVudC4kZGIuZ2V0UmF3KGZpbGUuc2xpY2UoMyksIGFzeW5jIGZ1bmN0aW9uKGEsIHJkKSB7CiAgICAgIAkJCWZvcih2YXIgaSA9IDA7IGkgPCA0MDk2OyBpKyspIHsKICAgICAgICAgICAgICAgICAgIG1hcFtpXSA9IChyZC5jaGFyQXQoaSAqIDQpIDw8IDI0KSB8IChyZC5jaGFyQ29kZUF0KGkgKiA0ICsgMSkgPDwgMTYpICB8IChyZC5jaGFyQ29kZUF0KGkgKiA0ICsgMikgPDwgOCkgIHwgcmQuY2hhckNvZGVBdChpICogNCArIDMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgbG9hZE1hcChtYXApOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAJCX0pOwogIAkJICB9CgkJfX0pOwogICAgICB9CiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcicpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHsKICAgICAgCiAgICAgIAkgIGZvcih2YXIgaSA9IDA7IGkgPCAzMjc2ODsgaSsrKSBtYXBbaV0gPSBFTVBUWTsKCSAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSBmb3IodmFyIGogPSAwOyBqIDwgMTY7IGorKykgbWFwW2dldFBvcyhpLCAwLCBqKV0gPSAyNTUgPDwgODsKICAgICAgICAgIGxvYWRNYXAobWFwKTsKICAgICAgfQogICAgPC9zY3JpcHQ+CiAgPC9ib2R5Pgo8L2h0bWw+Cg==";
var application_init = "bGUuX2FwcHNbIkJ1aWxkM0QiXSA9IHsKICBuYW1lOiAiM0RCdWlsZGVyIiwKICBjYXRoZWdvcmllczogIkdyYXBoaWNzIiwKICBpY29uOiAiL2MvZmlsZXMvaW1hZ2VzL2ljb25zL2JvbWIucG5nIiwKICBleGVjOiAoKT0+ICRleGUoImlmcmFtZSAvYS9ldGMvM0RCdWlsZGVyL2FwcC5odG1sIC0td2lkdGg9NDg0IC0tLWhlaWdodD02NDAgLS1pY29uPS9jL2ZpbGVzL2ltYWdlcy9pY29ucy9ib21iLnBuZyIpCn0=";

/* create files and folders */

$db.set("etc/3DBuilder/models/README.txt", "You can save your models here.");
$db.set("etc/3DBuilder/app.html", atob(application_base64));
$db.set("boot/Build3D_init.js", atob(application_init));
localStorage.setItem('desktop/Build3D.lnk42', '{"exe":"Build3D"}');

$alert("Press OK to restart.", function() {$exe("reboot")})
