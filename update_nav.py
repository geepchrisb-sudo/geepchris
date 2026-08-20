import os
import re

# Set your project directory
project_dir = "."

# Link to insert
blog_link = '<li><a href="/blog.html">Blog</a></li>'

for root, _, files in os.walk(project_dir):
    for file in files:
        if file.endswith(".html"):
            filepath = os.path.join(root, file)
            
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            # Skip if blog link already exists
            if "blog.html" in content.lower():
                continue

            # Target the end of existing nav list or tag
            if "</ul>" in content:
                new_content = re.sub(r"(</ul>)", f"  {blog_link}\n\\1", content, count=1, flags=re.IGNORECASE)
            elif "</nav>" in content:
                new_content = re.sub(r"(</nav>)", f"  {blog_link}\n\\1", content, count=1, flags=re.IGNORECASE)
            else:
                continue

            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
                
            print(f"Updated: {file}")