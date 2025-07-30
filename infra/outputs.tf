output "frontend_url" {
  value = google_cloud_run_service.frontend.status[0].url
}

output "backend_url" {
  value = google_cloud_run_service.backend.status[0].url
}

# output "static_bucket_url" {
#   value = "gs://${google_storage_bucket.static_bucket.name}"
# }
