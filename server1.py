import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

PORT = 8000


class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Disable browser cache for HTML/CSS/JS."""
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    # Folder with server1.py
    web_dir = Path(__file__).parent.resolve()
    os.chdir(web_dir)

    print(f"[INFO] Serving directory: {web_dir}")

    # Check that main.html exists
    main_file = web_dir / "main.html"
    if not main_file.exists():
        print("[ERROR] main.html not found! Make sure it is in the same folder as server1.py.")
        return

    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        url = f"http://localhost:{PORT}/main.html"
        print(f"[OK] Server running at {url}")

        # open main.html automatically
        webbrowser.open(url)

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n[STOP] Server stopped.")


if __name__ == "__main__":
    main()
