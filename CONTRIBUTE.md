# Contributing to rfSE Club

Kindly read this before you proceed for contribution.

## How to Contribute

1. **Understand the Scope**

   - Contributions are limited to Markdown files (.md) containing curriculum content: concepts, code examples, or improvements to existing files.
   - Focus areas: Problem Analysis, Mathematics, Programming (C, JS, Python, Rust), Communication Skills (English - writing, speaking, leadership). (refer to the curriculum files for each subject.)
   - Content must be clear, practical, and tailored for 8th-12th grade students.

2. **Set Up the Repository**

   - Fork the repo: `https://github.com/mountainkidai/rfSEClub`.
   - Clone your fork: `git clone https://github.com/YOUR-USERNAME/rfSEClub.git`.
   - Create a feature branch: `git checkout -b feature/your-feature`.

3. **Make Changes**

   - Edit or create `.md` files in the appropriate directory (e.g., `curriculum/programming/`).
   - Ensure code examples are:
     - Functional and tested (e.g., run Python/Rust code locally).
     - Well-commented, with explanations for students.
     - Relevant to real-world problems (e.g., traffic solutions in Himachal).
   - Follow the curriculum’s style: concise, jargon-free, with practical applications.
   - Example structure for a new file:

     ````markdown
     # Topic: Rust Ownership

     ## Concept

     Ownership ensures memory safety in Rust...

     ## Code Example

     ```rust
     fn main() {
         let s = String::from("hello"); // s owns the string
         println!("{}", s);
     }
     ```
     ````

     ## Application

     Use ownership to manage resources in a Himachal tourism app...

     ```

     ```

4. **Submit a Pull Request (PR)**

   - Push your branch: `git push origin feature/your-feature`.
   - Open a PR to the `main` branch of `mountainkidai/rfSEClub`.
   - Include in the PR description:
     - Purpose of changes (e.g., “Added Python list comprehension to Programming.md”).
     - How it aligns with rfSE Club’s goals.
     - Confirmation that code examples are tested.
   - PRs require approval from `@aariv-mountainkid`. Expect feedback within 48 hours.

5. **Quality Standards**

   - Content must align with the first-principles approach (break down concepts to their core).
   - Code must be educational, with clear comments and student-friendly explanations.
   - Avoid redundancy; check existing files before adding new content.
   - Maintain a professional tone, free of slang or unrelated topics.

6. **Code of Conduct**
   - Unresolved disputes or off-topic contributions may lead to PR rejection.
   - Respect the mission: empower students to become world-class engineers.

## Testing Contributions

- Code examples must be tested locally before submission (e.g., run `python script.py` or `cargo run` for Rust).
- If your PR includes code, ensure it passes the repo’s GitHub Actions tests (configured for linting and validation).
- For Markdown, preview files to confirm formatting (e.g., headings, code blocks) renders correctly.

## License

- Contributions are licensed under the MIT License, matching the repo’s license.
- By submitting a PR, you agree your work can be used under this license.

## Why Contribute?

- Shape the future of engineering education in Himachal Pradesh & across the world.
- Help students solve real-world problems.
- Join a community of engineers building a tech valley by 2030.

## Contact

- For questions or verification, email `hello@mountainkid.ai`.
- Visit [rfse.club](https://www.rfse.club) for more details.

Great people often come from unexpected backgrounds, lets build with rfSE Club platform that bypasses conventional education system to help these people. cuz they are the ones who push the human civilization forward in the next decade.

Thank you

MountainKid AI
