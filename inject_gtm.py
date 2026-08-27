import os

# GTM Noscript tag for <body>
GTM_BODY_TAG = """<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KFJF5X8J"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->"""

def inject_gtm_body():
    updated_count = 0
    skipped_count = 0

    for root, dirs, files in os.walk("."):
        if 'node_modules' in root or '.git' in root:
            continue

        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()

                # Avoid duplicate insertion
                if "ns.html?id=GTM-KFJF5X8J" in content:
                    print(f"Skipped (already injected): {file_path}")
                    skipped_count += 1
                    continue

                # Inject right after opening <body> tag (case-insensitive)
                if "<body>" in content.lower():
                    body_idx = content.lower().find("<body>") + len("<body>")
                    new_content = content[:body_idx] + "\n" + GTM_BODY_TAG + content[body_idx:]

                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)
                    
                    print(f"Injected <body> tag into: {file_path}")
                    updated_count += 1
                else:
                    print(f"Skipped (no <body> tag found): {file_path}")

    print(f"\nDone! Injected Body Tags: {updated_count}, Skipped: {skipped_count}")

if __name__ == "__main__":
    inject_gtm_body()