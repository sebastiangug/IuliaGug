# iuliaGug.com

Modules:

    App.Module
        Components:
            - skill
            - portfolio
            - nav-desktop
            - nav-mobile
            - wip-overlay
            - dev
        Pages:
            - Home
            - Portfolio
            - Skills
            - About
            - Contact
            - Login
        Services:
            - public.service
            - auth.service
        Guards:
            - auth.guard

    Admin.Module
        Components:
            - edit-skill
            - edit-portfolio
            - add-skill
            - add-portfolio
            - nav-admin
        Pages:
            - manage-skills
            - manage-portfolio

        Services:
            - admin.service
            - notify.service

    Shared.Module
        Components:
            - icon
            - icon-definitions
        Modules:
            - Angular Material
            - Angular Forms
