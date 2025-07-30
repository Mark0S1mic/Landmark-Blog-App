provider "google" {
  project = var.project_id
  region  = var.region
}

# Cloud Run 
resource "google_cloud_run_service" "frontend" {
  name     = "landmark-client"
  location = var.region
  project  = var.project_id
}
resource "google_cloud_run_service" "backend" {
  name     = "landmark-server"
  location = var.region
  project  = var.project_id
}


#  Storage bucket (ako koristiš za static assets, logs itd.)
# resource "google_storage_bucket" "static_bucket" {
#   name     = "${var.project_id}-static-bucket"
#   location = var.region
# }
