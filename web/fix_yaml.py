#!/usr/bin/env python3

import os
import glob
import re

def fix_yaml_file(filepath):
    """Fix YAML description field to use block scalar syntax"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Look for description fields that start with quoted strings containing **
        # Pattern: description: "**The ...
        pattern = r'description: "(\*\*[^"]*(?:\*\*[^"]*)*).*?"'
        
        def replace_description(match):
            # Extract the description content without quotes
            desc_content = match.group(0)[14:]  # Remove 'description: "'
            if desc_content.endswith('"'):
                desc_content = desc_content[:-1]  # Remove trailing quote
            
            # Replace with block scalar syntax
            return f'description: |\n  {desc_content}'
        
        # Only replace if we find the problematic pattern
        if re.search(r'description: "\*\*.*', content, re.DOTALL):
            # Use a more careful approach - find the description field and replace it
            lines = content.split('\n')
            new_lines = []
            in_desc = False
            desc_content = []
            
            for line in lines:
                if line.startswith('description: "**'):
                    # Start of problematic description
                    in_desc = True
                    desc_line = line[14:]  # Remove 'description: "'
                    if desc_line.endswith('"'):
                        # Single line description
                        desc_content = [desc_line[:-1]]
                        new_lines.append('description: |')
                        new_lines.append(f'  {desc_content[0]}')
                        in_desc = False
                        desc_content = []
                    else:
                        desc_content = [desc_line]
                elif in_desc:
                    if line.endswith('"'):
                        # End of multi-line description
                        desc_content.append(line[:-1])  # Remove trailing quote
                        new_lines.append('description: |')
                        for desc_line in desc_content:
                            new_lines.append(f'  {desc_line}')
                        in_desc = False
                        desc_content = []
                    else:
                        desc_content.append(line)
                else:
                    new_lines.append(line)
            
            new_content = '\n'.join(new_lines)
            
            # Write the fixed content back
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"Fixed: {filepath}")
            return True
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False
    
    return False

def main():
    # Find all YAML files in the data directory
    data_dir = "../data"
    yaml_files = glob.glob(os.path.join(data_dir, "*.yaml"))
    
    fixed_count = 0
    for yaml_file in yaml_files:
        if fix_yaml_file(yaml_file):
            fixed_count += 1
    
    print(f"\nFixed {fixed_count} out of {len(yaml_files)} YAML files")

if __name__ == "__main__":
    main()