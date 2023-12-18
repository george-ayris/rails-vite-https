class ApplicationController < Rails::ApplicationController
  def index
    render inline: "
    <!DOCTYPE html>
    <html>
    <head>
        <title>Rails Vite SSL Test</title>
        <meta id=\"viewport\" name=\"viewport\" content=\"width=device-width,initial-scale=1\">
    </head>
    <body>
        <%= vite_client_tag %>
        <%= vite_javascript_tag 'application' %>
    </body>
    <html>"
  end
end
