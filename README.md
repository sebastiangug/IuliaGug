# iuliaGug.com

Modules:

    App.Module
        Components:
            - skill
            - portfolio
            - nav-desktop
            - nav-mobile
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
