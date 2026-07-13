from dataclasses import dataclass
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle


PDF_DIR = Path("public/resumes")
PRIMARY_OUTPUT_PATH = Path("public/resume.pdf")


@dataclass(frozen=True)
class Project:
    name: str
    stack: str
    bullet: str


@dataclass(frozen=True)
class Experience:
    name: str
    dates: str
    bullet: str


@dataclass(frozen=True)
class Variant:
    filename: str
    role: str
    profile: str
    projects: list[Project]
    skills: list[tuple[str, str]]
    strengths: list[str]


PROJECTS = {
    "jarvis": Project(
        "Jarvis Voice Assistant",
        "React Native, Expo, FastAPI, Deepgram, Groq, PostgreSQL, Redis, Docker",
        "Built a functional spoken question-to-answer pipeline around 2 seconds across STT, LLM, TTS, APIs, and persistence.",
    ),
    "convai": Project(
        "ConvAI Speech Analysis Agent",
        "Python, LLM APIs, audio ingestion, structured JSON outputs, automation workflows",
        "Created a reusable workflow that turns speech recordings into summaries, extracted insights, and automation-friendly JSON.",
    ),
    "teclis": Project(
        "Teclis Scientific",
        "Next.js, React, TypeScript, Tailwind CSS, Sanity CMS, REST APIs, SEO, multilingual architecture",
        "Revamped a legacy Wix system into a CMS-driven Next.js platform and expanded multilingual support from 3 to 10 languages.",
    ),
    "uparena": Project(
        "StreamArena / UpArena",
        "Next.js, React, TypeScript, PostgreSQL, Web3 libraries, smart-contract interactions",
        "Designed Web2-friendly interfaces for Web3 prediction flows, wallet actions, transaction feedback, and onboarding.",
    ),
}


EXPERIENCE = [
    Experience(
        "Full-Stack Developer - Freelance",
        "Aug 2022 - Current",
        "Built web and mobile applications with React, Next.js, React Native, FastAPI, Python, APIs, automation, SEO, CMS, and delivery.",
    ),
    Experience(
        "Full-Stack Developer - Teclis Scientific",
        "Jun 2025 - Nov 2025",
        "Modernized a difficult-to-maintain marketing site into a CMS-driven international platform with cleaner SEO and content workflows.",
    ),
    Experience(
        "Web3 Front-End & Integration Developer - Independent Projects",
        "Jan 2022 - Dec 2025",
        "Built wallet flows, smart-contract interactions, token-gated experiences, prediction mechanics, and clearer transaction UX.",
    ),
]


BASE_SKILLS = [
    ("Frontend", "JavaScript, TypeScript, React, Next.js, Tailwind CSS"),
    ("Mobile", "React Native, Expo"),
    ("Backend", "Python, FastAPI, REST APIs, Node.js"),
    ("Data", "PostgreSQL, Redis, Supabase, SQL"),
    ("Delivery", "Docker, Git, GitHub, CI/CD, Vercel, CMS workflows"),
    ("Web3", "Solidity, Ethers.js, Hardhat, wallets, smart-contract integrations"),
]


VARIANTS = [
    Variant(
        "simon-lechevalier-full-stack.pdf",
        "Full-Stack Software Engineer - React, Next.js, React Native, FastAPI, PostgreSQL, automation and Web3 integrations",
        "Full-stack developer focused on shipping production-ready web and mobile products quickly. Comfortable across frontend, backend APIs, automation workflows, databases, deployment, SEO, CMS-driven content, and Web3 integrations.",
        [PROJECTS["jarvis"], PROJECTS["convai"], PROJECTS["teclis"], PROJECTS["uparena"]],
        BASE_SKILLS,
        [
            "Fast full-stack product delivery, API integration, automation, debugging, and refactoring.",
            "Product-minded UX decisions, SEO basics, Shopify/storefront constraints, and CMS-backed marketing sites.",
            "Languages: French native, English business level, Japanese conversational.",
        ],
    ),
    Variant(
        "simon-lechevalier-frontend-nextjs.pdf",
        "Frontend / React / Next.js Developer - TypeScript, UX, CMS, SEO, product delivery",
        "Frontend-oriented developer building polished React and Next.js interfaces with TypeScript, maintainable component systems, CMS-backed content, SEO foundations, and product-minded UX decisions.",
        [PROJECTS["teclis"], PROJECTS["uparena"], PROJECTS["jarvis"], PROJECTS["convai"]],
        [
            ("Frontend", "JavaScript, TypeScript, React, Next.js, Tailwind CSS, component systems"),
            ("UX", "Responsive UI, onboarding, forms, state feedback, accessibility basics"),
            ("Content", "Sanity CMS, multilingual routing, SEO structure, structured content workflows"),
            ("Integration", "REST APIs, Supabase, wallet flows, third-party SDKs"),
            ("Delivery", "Git, GitHub, Vercel, CI/CD, debugging, refactoring"),
        ],
        [
            "Strong fit for React, Next.js, TypeScript, UI implementation, CMS, SEO, and product-facing frontend roles.",
            "Comfortable translating unclear product needs into maintainable user flows and interface states.",
            "Languages: French native, English business level, Japanese conversational.",
        ],
    ),
    Variant(
        "simon-lechevalier-api-automation.pdf",
        "Integration / API / Automation Engineer - FastAPI, Python, PostgreSQL, workflows, product delivery",
        "Developer focused on practical integrations, API workflows, automation, data persistence, and product delivery. Comfortable connecting frontend clients, backend services, LLM/audio APIs, databases, and deployment pipelines.",
        [PROJECTS["jarvis"], PROJECTS["convai"], PROJECTS["teclis"], PROJECTS["uparena"]],
        [
            ("Backend", "Python, FastAPI, REST APIs, Node.js, structured JSON outputs"),
            ("Automation", "Audio ingestion, LLM APIs, workflow orchestration, data extraction"),
            ("Data", "PostgreSQL, Redis, Supabase, SQL, persistence design"),
            ("Frontend", "React, Next.js, React Native, TypeScript"),
            ("Delivery", "Docker, Git, GitHub, CI/CD, Vercel, debugging, refactoring"),
        ],
        [
            "Strong fit for API integration, automation, internal tools, solutions engineering, and startup delivery roles.",
            "Able to connect product UX with backend workflow constraints and third-party service reliability.",
            "Languages: French native, English business level, Japanese conversational.",
        ],
    ),
    Variant(
        "simon-lechevalier-web3-integration.pdf",
        "Web3 Integration Developer - React, Next.js, Solidity, wallets, transaction UX, product delivery",
        "Full-stack developer with Web3 integration experience across wallet flows, smart-contract interactions, prediction mechanics, token-gated experiences, and user-friendly transaction feedback.",
        [PROJECTS["uparena"], PROJECTS["teclis"], PROJECTS["jarvis"], PROJECTS["convai"]],
        [
            ("Web3", "Solidity, Ethers.js, Hardhat, wallets, smart-contract integrations"),
            ("Frontend", "JavaScript, TypeScript, React, Next.js, Tailwind CSS"),
            ("Product UX", "Wallet onboarding, transaction feedback, Web2-friendly flows"),
            ("Backend/Data", "FastAPI, REST APIs, PostgreSQL, Supabase, Redis"),
            ("Delivery", "Docker, Git, GitHub, CI/CD, Vercel, debugging, refactoring"),
        ],
        [
            "Strong fit for Web3 frontend, integration, wallet UX, and crypto product roles.",
            "Web3 treated as an integration/product problem: clear state, safer flows, and lower onboarding friction.",
            "Languages: French native, English business level, Japanese conversational.",
        ],
    ),
]


def p(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text, style)


def bullet(text: str, style: ParagraphStyle) -> Paragraph:
    return p(f"- {text}", style)


def build_styles() -> dict[str, ParagraphStyle]:
    styles = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "Title",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=24,
            leading=28,
            textColor=colors.HexColor("#111111"),
            spaceAfter=4,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.8,
            leading=13.2,
            textColor=colors.HexColor("#333333"),
            spaceAfter=8,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=8.45,
            leading=10.9,
            textColor=colors.HexColor("#222222"),
            spaceAfter=4,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=7.75,
            leading=9.8,
            textColor=colors.HexColor("#444444"),
        ),
        "heading": ParagraphStyle(
            "Heading",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=9,
            leading=11,
            textColor=colors.HexColor("#111111"),
            spaceBefore=7,
            spaceAfter=4,
            uppercase=True,
        ),
        "item_title": ParagraphStyle(
            "ItemTitle",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=8.8,
            leading=11.1,
            textColor=colors.HexColor("#222222"),
            spaceAfter=1,
        ),
        "link": ParagraphStyle(
            "Link",
            parent=styles["Normal"],
            fontName="Helvetica",
            fontSize=7.75,
            leading=9.8,
            textColor=colors.HexColor("#0645AD"),
        ),
    }


def build_variant(variant: Variant, output_path: Path) -> None:
    styles = build_styles()
    doc = BaseDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=12 * mm,
        rightMargin=12 * mm,
        topMargin=10 * mm,
        bottomMargin=9 * mm,
    )
    frame = Frame(
        doc.leftMargin,
        doc.bottomMargin,
        A4[0] - doc.leftMargin - doc.rightMargin,
        A4[1] - doc.topMargin - doc.bottomMargin,
        id="resume",
    )
    doc.addPageTemplates([PageTemplate(id="resume", frames=[frame])])

    story = [
        p("SIMON LECHEVALIER", styles["title"]),
        p(variant.role, styles["role"]),
        p(
            '<a href="mailto:simon.lechevalier@hotmail.fr">simon.lechevalier@hotmail.fr</a> | '
            '<a href="https://www.linkedin.com/in/simon-lechevalier-5ba743198/">LinkedIn</a> | '
            '<a href="https://github.com/yamatoeth">GitHub</a> | '
            '<a href="https://simon-lechevalier-cv.vercel.app/">CV Web</a> | '
            '<a href="https://portfoliofullstackdev.vercel.app/">Portfolio</a>',
            styles["link"],
        ),
        Spacer(1, 4),
        p("PROFILE", styles["heading"]),
        p(f"{variant.profile} Open to junior/mid engineering roles, startup environments, solutions/integration engineering, and freelance work.", styles["body"]),
        p("FEATURED PROJECTS", styles["heading"]),
    ]

    for project in variant.projects:
        story.append(p(project.name, styles["item_title"]))
        story.append(p(f"<b>Stack:</b> {project.stack}", styles["small"]))
        story.append(bullet(project.bullet, styles["body"]))
        story.append(Spacer(1, 1.8))

    story.append(p("PROFESSIONAL EXPERIENCE", styles["heading"]))
    for exp in EXPERIENCE:
        story.append(p(f"{exp.name} <font color='#666666'>({exp.dates})</font>", styles["item_title"]))
        story.append(bullet(exp.bullet, styles["body"]))
        story.append(Spacer(1, 1.8))

    story.append(p("TECHNICAL SKILLS", styles["heading"]))
    skills_table = Table(variant.skills, colWidths=[27 * mm, 140 * mm], hAlign="LEFT")
    skills_table.setStyle(
        TableStyle(
            [
                ("FONTNAME", (0, 0), (0, -1), "Helvetica-Bold"),
                ("FONTNAME", (1, 0), (1, -1), "Helvetica"),
                ("FONTSIZE", (0, 0), (-1, -1), 8.15),
                ("LEADING", (0, 0), (-1, -1), 10.2),
                ("TEXTCOLOR", (0, 0), (-1, -1), colors.HexColor("#222222")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 2.2),
                ("TOPPADDING", (0, 0), (-1, -1), 2.2),
            ]
        )
    )
    story.append(skills_table)

    story.append(p("ADDITIONAL STRENGTHS", styles["heading"]))
    for strength in variant.strengths:
        story.append(bullet(strength, styles["body"]))

    story.append(p("EDUCATION", styles["heading"]))
    story.append(p("University of Geneva - B.Tech in Computer Science - 2018-2022", styles["body"]))
    doc.build(story)


def build_all_resumes() -> None:
    PDF_DIR.mkdir(parents=True, exist_ok=True)
    for variant in VARIANTS:
        output_path = PDF_DIR / variant.filename
        build_variant(variant, output_path)
        if variant.filename == "simon-lechevalier-full-stack.pdf":
            PRIMARY_OUTPUT_PATH.write_bytes(output_path.read_bytes())


if __name__ == "__main__":
    build_all_resumes()
